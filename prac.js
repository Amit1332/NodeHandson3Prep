const { log } = require('console');
const fs = require('fs')
const http = require('http')
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


    fs.writeFileSync('Ea25-2',"Hi i am amitesh singh")
    fs.appendFileSync('Ea25-2',"Hi i am amitesh singhfghfghgfh")

    fs.readFile('Ea25-1','utf-8',(err,data)=>{
                if(err){
                    log(err)
                }
                else{
                    log(data)
                }
            })


           const da= fs.readFileSync('Ea25-1')
           log(da.toString())

PORT= 5000
fs.unlinkSync('Ea25-1')


http.createServer((req,res)=>{
    if(req.url==='/' && req.method==="GET"){
        res.write(`<title>Node Handson-1</title> <h3>what is Node js ?</h3> <p>1. Node js is a javascript runtime environemet on server time</p>
        <p>2. Node js is a cross-plateform or open source plateform</p>
        
        
        `)
        res.end()
    }
    else if(req.url=== "/student"){
        const jsonstring = JSON.stringify(data)
       res.write(jsonstring)
        res.end()


    }
    else if(req.url=== "/register"){
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

