# MySQL数据库的介绍和安装与登录

## 1.MySQL数据库介绍

- 小型的数据库
- 开源免费(6版本之前免费)
- 所属于Oracle公司

## 2.MySQL数据库安装

[下载地址](https://dev.mysql.com/downloads/mysql/5.7.html)

1. 下载`mysql-5.7.37-1.el7.x86_64.rpm-bundle.tar`，移动到目标目录，解压


2. 解压 mysql 的安装包

```shell
mkdir mysql
tar -xvf mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar -C mysql/
```

4. 安装客户端

```shell
cd mysql/
rpm -ivh mysql-community-client-5.7.37-1.el7.x86_64.rpm  --force --nodeps
```

5. 安装服务端

```
rpm -ivh mysql-community-server-5.7.37-1.el7.x86_64.rpm --force --nodeps
```

6. 修改mysql默认字符集

```
vi /etc/my.cnf

添加如下内容：
[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci

-- 需要在最下方填写
[client]
default-character-set=utf8
```

7. 启动mysql服务

```
service mysqld start
```

8. 登录mysql

```
初始密码查看：cat /var/log/mysqld.log
在root@localhost:   后面的就是初始密码 .,voaES<+9n+
mysql -u root -p  敲回车，输入密码
```

9. 修改mysql登录密码

```
set global validate_password_policy=0;

set global validate_password_length=1;

set password=password('密码');
```

10. 授予远程连接权限

```
//授权
grant all privileges on *.* to 'root' @'%' identified by '密码';
//刷新
flush privileges;
```

11. 关闭Linux系统防火墙

```
systemctl stop firewalld.service
```

## 3.MySQL数据库登录

- sqlyog工具登录mysql

![02](./images/md1/02.png)
