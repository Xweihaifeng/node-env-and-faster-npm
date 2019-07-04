
var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

/* 连接mysql数据库 */
var connection = mysql.createConnection({
    host:     'localhost',
    user:     'root',
    password: 'root',
    port:     '3306',
    database: 'test'
});
connection.connect(function(err) {
    if (err) {
        console.log("链接失败");
        throw (err)
    } else {
        console.log("链接成功");
    }
})

//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", '3.2.1')
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//创建请求服务
app.post('/userLogin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sql = `select * from login where username = '${username}' and password = '${password}'`;
    connection.query(sql, function (err, result) {
        console.log(result)
        if (err || result.length == 0) {
            res.status(200),
                res.json("登陆失败")
        } else {
            res.status(200),
                res.json("登陆成功")
        }
    });
})