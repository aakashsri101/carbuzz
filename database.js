var mysql = require('mysql2')

// var con = mysql.createConnection({
//     host:'projectdb.cuifyxmoafi1.ap-south-1.rds.amazonaws.com',
//     user:'shyam',
//     password:'Shyam5105',
//     database: 'projectDatabase'
// })
var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Aakash1@',
        database: 'carbuzz'
    })
con.connect(function(err){
    if(err)throw err
    console.log("Connected!");
})
module.exports = con;