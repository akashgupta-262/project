const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path')

const fs = require('fs');
// const ejs = require('ejs')


const rawdata = require("../data.json")

const date =  "2021-10-11T00:00:00+0000"



const len = rawdata.data.length;

for (let i = 0; i < len ;i++)
{
    let fdata = rawdata.data[i]

    if (fdata.date == date) {
        console.log(`low ${fdata.low}`)
        console.log(`high${fdata.high}`)
    }
    else {
        console.log("Invalid date");
    }

}



// console.log(rawdata.data[0].date);
console.log(rawdata.data.length)





































// const http = require("http");

// const url = "http://api.marketstack.com/v1/eod?access_key=ebd40e978f73c6dbc445d9d9930a4bac&symbols=AAPL"; // Request URL


// http.get(url, (res)=>{
//     var body = '';

//     res.on('data', (chunk)=>{
//         body += chunk;
//     });

//     res.on('end', ()=>{
//         var data = JSON.parse(body); 
//         console.log("Got a response: ", data.value);
//     });
// }).on('error', (e)=>{
//       console.log("Got an error: ", e);
// });


// //  const getData =require('../data.json')



// const app = express();

// app.set('views', path.join(__dirname, '../views'))
// app.set('use', path.join(__dirname, '../use'))

//ejs

// app.use(bodyParser.json());
// app.set('view engine', 'ejs')



// app.get('/', (req, res) => {
//     res.render('home');
// })

// app.post('/', (req, res) => {
// console.log(req.body.fromDate)
// res.send(getData);


// })

// app.listen(3000, () => {
//     console.log('Server is running')
// })
