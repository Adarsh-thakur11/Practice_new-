var mysql= require('mysql');
var con=mysql.createConnection({
host : "localhost",
user: "root@localhost",
password : "ada@chat7"


});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})