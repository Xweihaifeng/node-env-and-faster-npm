下载安装mysql：[链接](https://dev.mysql.com/downloads/mysql/)
mysql客户端管理：[链接](https://pan.baidu.com/s/15VTMe70EyDj0fl4Jg1_qfw)(提取码：6pgc)

启动mysql数据库：
E:\mysql\mysql-8.0.16\bin>mysqld --initialize --console
E:\mysql\mysql-8.0.16\bin>mysqld install
E:\mysql\mysql-8.0.16\bin>net start mysql

安装mysql后连接出错（错误：Access denied for user 'root'@'localhost' (using password: YES)"）的解决办法：
E:\mysql\mysql-8.0.16\bin>mysql -u root -p
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> use mysql;
mysql> select user,host from user;
mysql> select user,host,password from user;
mysql> alter table user add column password varchar(64);
mysql> update user set password=password('root');

查看数据库
E:\mysql\mysql-8.0.16\bin>mysql -u root -p
mysql> show databases;