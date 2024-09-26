require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operation')
const mongoConnection = new MongoOperations('project')

const addCostumer = async (customer) => {
    mongoConnection.Collection = 'customers'
    const response = await mongoConnection.insertItem(customer)
    return response
}

const findCustomer = async (filter) => {
    console.log("laly");

    mongoConnection.Collection = 'customers'
    const response = await mongoConnection.find(filter)
    console.log("res", response);

    return response
}
module.exports = { addCostumer, findCustomer }