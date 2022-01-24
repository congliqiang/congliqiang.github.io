---
title: REDIS内存优化及配置
date: 2022-01-24 11:00:30
tags: [redis]
top_img: /img/redis/redis31.jpg
cover: /img/redis/redis31.jpg
swiper_index: 1 #置顶轮播图顺序，非负整数，数字越大越靠前
---
![](/img/redis/redis31.jpg)
# Redis优化及配置
Redis所有的数据都在内存中，而内存又是非常宝贵的资源。常用的内存优化方案有如下几个部分：
一、配置优化
二、缩减键值对象
三、命令处理
四、缓存淘汰方案
## 一、配置优化
### Linux配置优化
目前大部分公司都会将 Web 服务器、数据库服务器等部署在 Linux 操作系统上，Redis优化也需要考虑操作系统，所以接下来介绍 Linux 操作系统如何优化 Redis。
### 内存分配
* vm.overcommit_memory
* Redis是内存操作，需要优先使用内存。设置overcommit为1。是为了让fork操作能够在低内存下也执行成功。Linux操作对大部分申请内存的请求都回复yes，以便
能运行跟多程序。因为申请内存后，并不会马上使用内存，这种技术叫做overcommit。vm.overcommit_memory用来设置内存分配策略，有三个可选值
![](/img/redis/redis32.jpg)
#### THP
* Redis 在启动时可能会看到如下日志：
  `WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage 
issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, 
and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.`
* Redis 建议修改 Transparent Huge Pages（THP）的相关配置，Linux kernel 在2.6.38内核增加了 THP 特性，支持大内存页（2MB）分配，默认开启。
当开启时可以降低fork子进程的速度，但fork操作之后，每个内存页从原来 4KB 变为 2MB，会大幅增加重写期间父进程内存消耗。同时每次写命令引起的复制内
存页单位放大了512倍，会拖慢写操作的执行时间，导致大量写操作慢查询，例如简单的 incr 命令也会出现在慢查询中。因此 Redis 日志中建议将此特性进行禁用，禁用方法如下：
`echo never > /sys/kernel/mm/transparent_hugepage/enabled`
为使机器重启后THP配置依然生效，可以在/etc/rc.local中追加
`echo never>/sys/kernel/mm/transparent_hugepage/enabled`
#### swappiness
* swap 对于操作系统来比较重要，当物理内存不足时，可以将一部分内存页进行 swap 操作，已解燃眉之急。swap 空间由硬盘提供，对于需要高并发、
高吞吐的应用来说，磁盘 IO 通常会成为系统瓶颈。在 Linux 中，并不是要等到所有物理内存都使用完才会使用到 swap，系统参数 swppiness 会决定操作系
统使用 swap 的倾向程度。swappiness 的取值范围是0~100，swappiness 的值越大，说明操作系统可能使用swap的概率越高，swappiness 值越低，表示
操作系统更加倾向于使用物理内存。swap 的默认值是60，了解这个值的含义后，有利于 Redis 的性能优化。下表对 swappiness 的重要值进行了说明。
  ![](/img/redis/redis33.jpg)
`OOM（Out Of Memory）killer` 机制是指 Linux 操作系统发现可用内存不足时，强制杀死一些用户进程（非内核进程），来保证系统有足够的可用内存进行
分配。 为使配置在重启 Linux 操作系统后立即生效，只需要在`/etc/sysctl.conf` 追加 `vm.swappiness={bestvalue}`即可
`echo vm.swappiness={bestvalue} >> /etc/sysctl.conf`
* 查看 swap 的总体情况 free-m 如下服务器开启了8189M swap，其中使用了 5241MB
  ![](/img/redis/redis34.jpg)
#### ulimit设置
* 可以通过 ulimit 查看和设置系统当前用户进程的资源数。其中 ulimit-a 命令包含的 open files 参数，是单个用户同时打开的最大文件个数：
  ![](/img/redis/redis35.jpg)
* Redis 允许同时有多个客户端通过网络进行连接，可以通过配置 maxclients 来限制最大客户端连接数。对 Linux 操作系统来说，这些网络连接都是文件
句柄。假设当前 open files 是4096，那么启动 Redis 时会看到如下日志：
`You requested maxclients of 10000 requiring at least 10032 max file descriptors.
Redis can’t set maximum open files to 10032 because of OS error: Operation not permitted.
Current maximum open files is 4096. Maxclients has been reduced to 4064 to compensate for low ulimit. If you need higher maxclients increase ‘ulimit –n’.`
  解释如下：
  第一行：Redis 建议把 open files 至少设置成10032，那么这个10032是如何来的呢？因为 maxclients 默认是10000，这些是用来处理客户端连接的，
除此 之外，Redis 内部会使用最多32个文件描述符，所以这里的10032=10000+32。
  第二行：Redis 不能将 open files 设置成10032，因为它没有权限设置。
  第三行：当前系统的 open files 是4096，所以将 maxclients 设置成4096-32=4064个，如果你想设置更高的 maxclients，请使用 ulimit-n 来设置。
  从上面的三行日志分析可以看出 open files 的限制优先级比 maxclients 大。 Open files 的设置方法如下： ulimit –Sn {max-open-files}
### Redis配置优化
1. 设置maxmemory,设置Redis使用的最大物理内存,即Redis在占用maxmemory大小的内存之后就开始拒绝后续的写入请求，该参数可以确保Redis因为使用了
大量内存严重影响速度或者发生OOM(out-of-memory，发现内存不足时，它会选择杀死一些进程(用户态进程，不是内核线程)，以便释放内存)。此外，
可以使用info命令查看Redis占用的内存及其它信息。
2. 让键名保持简短。键的长度越长，Redis需要存储的数据也就越多。
3. 客户端timeout 设置一个超时时间，防止无用的连接占用资源。设置如下命令：
   `timeout 150`
   `tcp-keepalive 150 (定时向client发送tcp_ack包来探测client是否存活的。默认不探测)`
4. 检查数据持久化策略
   数据落磁盘尽可能减少性能损坏，以空间换时间。设置如下命令：
   * `rdbcompression no` : 默认值是yes。对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis会采用LZF算法进行压缩。如果你不想
   消耗CPU来进行压缩的话，可以设置为关闭此功能，但是存储在磁盘上的快照会比较大。
   * `rdbchecksum no` : 默认值是yes。在存储快照后，我们还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果希
   望获取到最大的性能提升，可以关闭此功能。
5. 优化AOF和RDB，减少占用CPU时间 主库可以不进行dump操作或者降低dump频率。取消AOF持久化。命令如下:`appendonly no`
6. 监控客户端的连接
   * 因为Redis是单线程模型(只能使用单核)，来处理所有客户端的请求，但由于客户端连接数的增长，处理请求的线程资源开始降低分配给单个客户端连接的处理时间
7. 限制客户端连接数 。在`Redis-cli`工具中输入`info clients`可以查看到当前实例的所有客户端连接信息
   * maxclients属性上修改客户端连接的最大数，可以通过在Redis-cli工具上输入 `config set maxclients` 去设置最大连接数。根据连接数负载的情况。
## 二、缩减键值对象
降低Redis内存使用最直接的方式就是缩减键（key）和值（value）的长度
* key长度：如在设计键时，在完整描述业务情况下，键值越短越好。
* value长度：值对象缩减比较复杂，常见需求是把业务对象序列化成二进制数组放入Redis。首先应该在业务上精简业务对象，在存到Redis之前先把你的数据压缩下。
  常用压缩方法对比
  ![](/img/redis/redis36.jpg)
## 三、命令处理
Redis基于C/S架构模式，基于Redis操作命令是解决响应延迟问题最关键的部分，因为Redis是个单线程模型，客户端过来的命令是按照顺序执行的。比较常见的
延迟是带宽，通过千兆网卡的延迟大约有200μs。倘若明显看到命令的响应时间变慢，延迟高于200μs，那可能是Redis命令队列里等待处理的命令数量比较多要分
析解决这个性能问题，需要跟踪命令处理数的数量和延迟时间。 比如可以写个脚本，定期记录total_commands_processed的值。当客户端明显发现响应时间过慢时，
可以通过记录的total_commands_processed历史数据值来判断命理处理总数是上升趋势还是下降趋势，以便排查问题在info信息里的`total_commands_processed`字
段显示了Redis服务处理命令的总数。
  ![](/img/redis/redis37.jpg)
解决方案：
1. 使用多参数命令：若是客户端在很短的时间内发送大量的命令过来，会发现响应时间明显变慢，这由于后面命令一直在等待队列中前面大量命令执行完毕。有个
方法可以改善延迟问题，就是通过单命令多参数的形式取代多命令单参数的形式。
* 举例来说 循环使用LSET命令去添加1000个元素到list结构中，是性能比较差的一种方式，更好的做法是在客户端创建一个1000元素的列表，用单个命令LPUSH或 RPUSH，
通过多参数构造形式一次性把1000个元素发送的Redis服务上。
2. 管道命令：另一个减少多命令的方法是使用管道(pipeline)，把几个命令合并一起执行，从而减少因网络开销引起的延迟问题。因为10个命令单独发送到服务端
会引起10次网络延迟开销，使用管道会一次性把执行结果返回，仅需要一次网络延迟开销。Redis本身支持管道命令，大多数客户端也支持，倘若当前实例延迟很明显，
那么使用管道去降低延迟是非常有效的。
## 缓存淘汰优化
redis内存数据集大小上升到一定大小的时候，就会进行数据淘汰策略。如果不淘汰经常不用的缓存数据，那么正常的数据将不会存储到缓存中。我们通过配置redis.conf
中的maxmemory这个值来开启内存淘汰功能。
* maxmemory
  值得注意的是，maxmemory为0的时候表示我们对Redis的内存使用没有限制
* 根据应用场景，选择淘汰策略
  maxmemory-policy noeviction
* 内存淘汰的过程
  首先，客户端发起了需要申请更多内存的命令（如set）。
  然后，Redis检查内存使用情况，如果已使用的内存大于maxmemory则开始根据用户配置的不同淘汰策略来淘汰内存（key），从而换取一定的内存。
  最后，如果上面都没问题，则这个命令执行成功。
### 动态改配置命令
1. 设置最大内存
   config set maxmemory 100000
2. 设置淘汰策略
   config set maxmemory-policy noeviction
### 内存淘汰策略
* volatile-lru
从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰。
* allkeys-lru
从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰
* volatile-lfu
从设置了过期时间的数据集（server.db[i].expires）中选择某段时间之内使用频次最小的键值对清除掉。
* allkeys-lfu
从所有的数据集（server.db[i].dict）中选择某段时间之内使用频次最少的键值对清除。
* volatile-ttl
从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰
* volatile-random
从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰
* allkeys-random
从数据集（server.db[i].dict）中任意选择数据淘汰
* no-enviction
当内存达到限制的时候，不淘汰任何数据，不可写入任何数据集，所有引起申请内存的命令会报错。
算法文章:(https://blog.csdn.net/ZYZMZM_/article/details/90546812)
### 如何选择淘汰策略
下面看看几种策略的适用场景
allkeys-lru ：如果我们的应用对缓存的访问符合幂律分布，也就是存在相对热点数据，或者我们不太清楚我们应用的缓存访问分布状况，我们可以选择 allkeys-lru策略。
allkeys-random ：如果我们的应用对于缓存key的访问概率相等，则可以使用这个策略。
volatile-ttl：这种策略使得我们可以向Redis提示哪些key更适合被eviction。

另外，volatile-lru策略和volatile-random策略适合我们将一个Redis实例既应用于缓存和又应用于持久化存储的时候，然而我们也可以通过使用两个Redis实例来达
到相同的效果，值得一提的是将key设置过期时间实际上会消耗更多的内存，因此我们建议使用allkeys-lru策略从而更有效率的使用内存