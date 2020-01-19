var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

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
/* app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", '3.2.1')
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
}); */

//创建请求服务
app.get('userLogin', function (req, res) {
    console.log(req, res);
    var username = req.query.username;
    var password = req.query.password;
    /*var sql = `select * from user where username = '${username}' and password = '${password}'`;*/
    var sql = "select * from user where username = '"+usernamet+"' and password = '"+password+"'";
    /*var sql = "select * from user where username = 'admin' and password = 'admin'";*/
    console.log('连接到数据库登录：', sql);
    connection.query(sql, function (err, result) {
        debugger;
        console.log(result)
        if (err || result.length == 0) {
            res.status(200),
            res.json("登陆失败")
        } else {
            res.status(200),
            res.json("登陆成功"),
            res.sendfile(__dirname + "/" + "home.html" );
        }
    });
})