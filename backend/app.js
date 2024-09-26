const express = require("express")
const cors=require('cors')

const customer_router = require('./routers/customerRouters')
const expenses_router = require('./routers/expensesRouters')
const receipt_router = require('./routers/receiptRouters')


const app = express()
app.use(cors())

app.get('/',(req,res) =>{

    res.status(200).json({message:'welcome'})

})

app.use('/customer',customer_router)
app.use('/expenses',expenses_router)
app.use('/receipt',receipt_router)

module.exports = app

