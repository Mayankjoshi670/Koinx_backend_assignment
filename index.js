const express = require('express') ; 
const morgan = require('morgan') ;
const app = express() ;
const connectDb = require('./config/connection');
const dotenv = require('dotenv');
const crypto = require('./routes/crypto_route')
const service = require('./background/services')
const nodeCorn = require('node-cron')
connectDb() ; 

app.use(express.json()) ; 
app.use(morgan('dev'))  ; 

nodeCorn.schedule('0 */2 * * *', ()=>{
    console.log("fetching in every 24 hr ") ; 
    service() ; 
})


 
const PORT = process.env.PORT || 5000 ; 


app.use('/api/v1' ,crypto )


app.listen(PORT , ()=>{
    console.log("server is running on port "+ PORT ) ; 
})