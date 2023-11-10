const { log } = require('console');
const express = require('express');
const fs = require('fs')
const http = require('http')
const app = express()
const  data = require('./jsonData')

// file system
// app.get('/', (req,res)=>{
  
//     fs.writeFile(`Ea25-1`,"Hi i am amitesh singh",'utf-8', (err)=>{
//         if(err){
//             log('Something wrong')
//         }else{
//             log('created file')
//             res.send("file created Ea25-1")
//         }
//     })
// })
// app.get('/student', (req,res)=>{
//     fs.writeFileSync('Ea25-2',"Hi i am amitesh singh")

// })
// app.get('/read', (req,res)=>{
//     fs.readFile('Ea25-1','utf-8',(err,data)=>{
//         if(err){
//             log(err)
//         }
//         else{
//             res.send(data)
//         }
//     })

// })






PORT= 5000
// app.listen(PORT,()=>{
//     console.log("server is started on 8000");
// })

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("<h1>Hello i am Amit this is homepage...</h1>")
        res.end()
    }
    else if(req.url=== "/student"){
        const jsonstring = JSON.stringify(data)
       res.write(jsonstring)
        res.end()


    }
    else{
        res.write("<h1>404 Not Found</h1>")
    }
}).listen(PORT,()=>{
    console.log(`connected on ${PORT}`);
})

