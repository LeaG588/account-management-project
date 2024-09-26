require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operation')
const mongoConnection = new MongoOperations('project')

const addReceipt = async (receipt) => {
    mongoConnection.Collection = 'receipts'
    const response = await mongoConnection.insertItem(receipt)
    return response
}

const findReceipt = async (filter) => {
    mongoConnection.Collection = 'receipts'
    const response = await mongoConnection.find(filter)
    return response
}

const getByMonth = async (month) => {
    mongoConnection.Collection = 'receipts'
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(receipt => {
        return parseInt(new Date(receipt.date).getMonth() + 1) === parseInt(month)
    })
    return result

}

const getByYear = async (year) => {
    mongoConnection.Collection = 'receipts'
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(receipt => {
        return year === new Date(receipt.date).getFullYear().toString();
    })

    return result
}

const getBy2Date = async (startDate, endDate) => {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    mongoConnection.Collection = 'receipts'
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(e => {
        const receiptDate = new Date(e.date);
        return receiptDate >= startDate && receiptDate <= endDate;
    })
    return result
}

const getByCust = async (customer) => {
    mongoConnection.Collection = 'receipts'
    const allReceipts = await findReceipt()
    const result = allReceipts.filter(receipt => receipt.customer === customer)
    return result
}
module.exports = {
    addReceipt,
    findReceipt,
    getByYear,
    getByMonth,
    getBy2Date,
    getByCust
}