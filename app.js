const express = require('express')
const data  = require('./jsonData')
const route = require('./routes')
const cors = require('cors')
const { userMiddleware } = require('./middlewares')


const app =express()

app.use(express.json())

app.use(cors({
    // origin:[
    //     "http://localhost:3000",
    //     "http://localhost:8000",
    //     "http://localhost:4000",
    //     "http://google.com"
    // ],
    origin:'*'
}))


app.use(userMiddleware)


app.use('/api',route)



// middlewares - 
// 1. application middleware
// 2. routing middleware
// 3. third party
// 4. error handling middlewaare


module.exports=app