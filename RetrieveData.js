const express =require('express')
const bodyparser= require('body-parser')
const app =express()
const mysql = require('mysql2')
const con=require('./database')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended :true
}));
app.get('/carbuzz/orders/:order_id',(req,res)=>{
    let sql=`select * from orders where order_id = ${req.params.order_id};`;
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
})
app.get('/carbuzz/user_details/:user_id',(req,res)=>{
    let sql=`select * from users where users_id = ${req.params.user_id};`;
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
})
app.get('/carbuzz/show_sellers/',(req,res)=>{
    let sql=`select * from sellers;`;
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
})
app.get('/carbuzz/show_new_cars/',(req,res)=>{
    let sql=`select * from new_cars;`;
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
})
app.get('/carbuzz/show_available_city/',(req,res)=>{
    let sql=`select c.city_id,c.city_name,ct.country_name from city c inner join country ct on c.country_id =ct.country_id ;`;
    let query =con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send(JSON.stringify({"status":200,"error":null,"response":result}));
    });
})
// app.get('/carbuzz/getalldata',(req,res)=>{
//     let sql="select * from carbuzz;";
//     let query =con.query(sql,(err,result)=>
//     {
//         if(err)throw err;
//         res.send(JSON.stringify({"status":200,"error":null,"response":result}));
//     });
// });
// app.post('/app/addData',function(req,res,next){
//     var name =req.body.name;
//     var address=req.body.address;
//     var mobile=req.body.mobile;

//     var sql = `insert into demo(name,address,mobile) values("${name}" , "${address}",${mobile});`
//     con.query(sql,function(err,result){
//         if(err)throw err

//         res.json({'status':'success',id:result.insertId})
//     })
// })
// app.get('/carbuzz/selectcity/:city',(req,res)=>{
//     console.log(req.params);
//     var sql = `select * from demo where address="${req.params.city}";`
//     con.query(sql,function(err,result){
//         if(err)throw err
//         res.send(JSON.stringify({"status":200,"error":null,"response":result}));
//         // res.json({'status':'success',id:result.insertId})
//     })
//     // res.send("Hyderabad");
// })
// app.get('/carbuzz/select/:city',(req,res)=>{
//     console.log(req.params);
//     var sql = `select * from demo where address="${JSON.parse(req.params.city).name}";`
//     con.query(sql,function(err,result){
//         if(err)throw err
//         res.send(JSON.stringify({"status":200,"error":null,"response":result}));
//         // res.json({'status':'success',id:result.insertId})
//     })
//     // res.send("Hyderabad");
// })
app.listen(3000,()=>{
    console.log("Server started on port 3000...");
});