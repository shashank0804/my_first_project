const exp = require('express');
const services = require('./services/service.js')

const app = exp(); // returns app from create application function
const PORT = 821;

app.get('/checking_connection',(req,res)=>{
    res.send("hey there !");
    services.fetchALL()
})

app.listen(PORT);

// https://github.com/shashank0804/my_first_project