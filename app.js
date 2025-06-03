require('dotenv').config()

 const connectionDb = require('./db')

const express = require('express');
const app = express();
const port = 5050 

const router = require('./server/router/tasks-route')


//middelware
app.use(express.json())

// routes
app.use('/api/v1/tasks',router)

const start = async (req,res) =>{
    try{
        await connectionDb
        app.listen(port, console.log(`server work on port ${port || 7000}`))
    }
    catch(err){
        console.log(err)
    }
}


start()


