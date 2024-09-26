require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operation')
const mongoConnection = new MongoOperations('project')

const addExpense = (expense) => {
  mongoConnection.Collection = 'expenses'
  const response = mongoConnection.insertItem(expense)
  return response

}

const findExpens = (filter) => {
  mongoConnection.Collection = 'expenses'
  const response = mongoConnection.find(filter)
  return response
}
const getByMonth = async (month) => {
  mongoConnection.Collection = 'expenses'
  const allExpenses = await findExpens()
  const result = allExpenses.filter(expense => {
    return parseInt(new Date(expense.date).getMonth() + 1) === parseInt(month)
  })
  return result

}

const getByYear = async (year) => {
  mongoConnection.Collection = 'expenses'
  const allExpenses = await findExpens()
  const result = allExpenses.filter(expense => {
    return year === new Date(expense.date).getFullYear().toString();
  })

  return result
}

const getBy2Date = async (startDate, endDate) => {
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  mongoConnection.Collection = 'expenses'
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => {
    const expenseDate = new Date(e.date);
    return expenseDate >= startDate && expenseDate <= endDate;
  })
  return result
}

module.exports = {
  addExpense,
  findExpens,
  getByMonth,
  getByYear,
  getBy2Date
}
