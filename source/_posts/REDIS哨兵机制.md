---
title: REDIS哨兵机制
date: 2022-01-23 18:21:13
tags: [redis]
top_img: /img/redis/redis23.jpg
cover: /img/redis/redis23.jpg
swiper_index: 1 #置顶轮播图顺序，非负整数，数字越大越靠前
---
# Redis-哨兵机制
## 一、主从复制的问题
Redis复制有一个缺点，当主机Master宕机以后，我们需要人工解决切换，比如使用`slaveof no one`.实际上主从复制并没有实现高可用。
高可用侧重备份机器，利用集群中系统的冗余，当系统中某台机器发生损坏的时候，其他后备的机器可以迅速的接替它来启动服务。
如下图所示：
![](/img/redis/redis24.jpg)
一旦主节点宕机，写服务无法使用，就需要手动去切换，重新选取主节点，手动设置主从关系。
### 那么如何解决呢?
如果我们有一个监控程序能够监控各个机器的状态及时作出调整，将手动的操作变成自动的。 Sentinel 的出现就是为了解决这个问题
## 二、哨兵机制的原理实现
* `Redis Sentinel`一个分布式架构，其中包含若干个Sentinel节点和Redis数据节点，每个Sentinel节点会对数据节点和其余Sentinel节点进行监控，当
它发现节点不可达时，会对节点做下线标识。
* 如果被标识的是主节点，它还会和其他Sentinel节点进行“协商”，当大多数Sentinel节点都认为主节点不可达时，它们会选举出一个Sentinel节点来完成自动故障
转移的工作，同时会将这个变化实时通知给Redis应用方。整个过程完全是自动的，不需要人工来介入，所以这套方案很有效地解决了Redis的高可用问题。
如下图所示：
![](/img/redis/redis25.jpg)
基本的故障转移流程：
 1. 主节点出现故障，此时两个从节点与主节点失去连接，主从复制失败。
![](/img/redis/redis26.jpg)
 2. 每个Sentinel节点通过定期监控发现主节点出现了故障
![](/img/redis/redis27.jpg)
 3. 多个 Sentinel 节点对主节点的故障达成一致会选举出其中一个节点作为领导者负责故障转移。
 ![](/img/redis/redis28.jpg)
 4. Sentinel 领导者节点执行了故障转移，整个过程基本是跟我们手动调整一致的，只不过是自动化完成的。
 5. 故障转移后整个 Redis Sentinel 的结构,重新选举了新的主节点
### Redis Sentinel具有以下几个功能
 * 监控：Sentinel节点会定期检测Redis数据节点、其余Sentinel节点是否可达
 * 通知：Sentinel节点会将故障转移的结果通知给应用方
 * 主节点故障转移：实现从节点晋升为主节点并维护后续正确的主从关系
 * 配置提供者：在Redis Sentinel结构中，客户端在初始化的时候连接的是Sentinel节点集合，从中获取主节点信息。
### 同时Redis Sentinel包含了若干个Sentinel节点，这样做也带来了两个好处：
 * 对于节点的故障判断是由多个Sentinel节点共同完成，这样可以有效地防止误判。
 * Sentinel节点集合是由若干个Sentinel节点组成的，这样即使个别Sentinel节点不可用，整个Sentinel节点集合依然是健壮的。
但是Sentinel节点本身就是独立的Redis节点，只不过它们有一些特殊，它们不存储数据，只支持部分命令。
 ![](/img/redis/redis29.jpg)
 * 通过`docker-compose`构建好哨兵跟主从的环境
Sentinel的核心配置
 * `sentinel monitor mymaster 127.0.0.1 7000 2`
监控的主节点的名字、IP和端口，最后一个2的意思是有几台Sentinel发现有问题，就会发生故障转移，例如配置为2，代表至少有2个Sentinel节点认为主节点不可达，
那么这个不可达的判断才是客观的。对于设置的越小，那么达到下线的条件越宽松，反之越严格。一般建议将其设置为Sentinel节点的一半加1(不得大于count(sentinel))
 * `sentinel down-after-millseconds mymaster 30000`
这个是超时的时间（单位为毫秒）。打个比方，当你去ping一个机器的时候，多长时间后仍ping不通，那么就认为它是有问题的。
 * `sentinel parallel-syncs mymaster 1`
当Sentinel节点集合对主节点故障判定达成一致时，Sentinel 领导者节点会做故障转移操作，选出新的主节点，原来的从节点会向新的主节点发起复制操作，
parallel-syncs 就是用来限制在一次故障转移之后，每次向新的主节点发起复制操作的从节点个数，指出 Sentinel 属于并发还是串行。1代表每次只能 复制一个，可以减轻 Master 的压力；
   ![](/img/redis/redis30.jpg)
 * `sentinel auth-pass <master-name> <password>`
如果 Sentinel 监控的主节点配置了密码，sentinel auth-pass 配置通过添加主节点的密码，防止 Sentinel 节点对主节点无法监控。
 * `sentinel failover-timeout mymaster 180000`
 表示故障转移的时间。
 ### Sentinel命令
 #### sentinel支持的合法命令如下：
