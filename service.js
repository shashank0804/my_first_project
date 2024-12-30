

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'8897594703',
    database:'employee'
})

connection.connect((err)=>{
    if(err) console.log("error in connecting.."+err.message);
    else console.log("successfully connected");
})

function fetchALL(){
    let query = "select * from employee";
    connection.query(query,(err,data)=>{
        if(err) console.log('error in the query !');
        else console.log('data found')
    })
}

// function setData(data) {
//     console.log('data = '+data);
//     let query = 'insert into employee (id,name,age) values ('+data.id+','+data.name+','+data.age+');'
//     console.log('query looks -> '+query);
//     connection.query(query,(err)=>{
//         if(err) console.log('error occurred while saving data into database...');
//         else console.log('data saved successfully.')
//     })
// }
module.exports = {fetchALL}