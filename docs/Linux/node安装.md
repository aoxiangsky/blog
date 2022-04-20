> wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz    // 下载
> tar xf node-v12.18.1-linux-x64.tar.xz                                   // 解压
> cd node-v12.18.1-linux-x64                                              // 进入解压目录


老规矩先备份，养成修改重要文件之前先备份的好习惯。

> cp /etc/profile /etc/profile.bak

然后 vim /etc/profile，在最下面添加 export PATH=$PATH: 后面跟上 node 下 bin 目录的路径

> export PATH=$PATH:/root/node-v12.18.1-linux-x64/bin

立即生效

source /etc/profile

[关于报错](https://medium.com/@akingsukh/how-to-solve-glibcxx-3-4-14-not-found-on-centos6-738d048b713f)
