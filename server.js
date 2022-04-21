const express =require('express')
const bodyparser= require('body-parser')
const app =express()
const mysql = require('mysql2')
const con=require('./database')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended :true
}));
app.get('/app/demo',(req,res)=>{
    let sql="select * from demo";
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
});
app.post('/app/addData',function(req,res,next){
    var name =req.body.name;
    var address=req.body.address;
    var mobile=req.body.mobile;

    var sql = `insert into demo(name,address,mobile) values("${name}" , "${address}",${mobile});`
    con.query(sql,function(err,result){
        if(err)throw err

        res.json({'status':'success',id:result.insertId})
    })
})
app.listen(3000,()=>{
    console.log("Server started on port 3000...");
});