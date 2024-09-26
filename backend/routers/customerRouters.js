const express = require('express');
const { addCostumer, findCustomer } = require('../services/modules/customers')

const router = express.Router()

router.get('/findCustomer/:filter?', async (req, res) => {
  try {
    const { filter } = req.params
    const customer = await findCustomer({ filter })
    res.status(200).json(customer)
  }
  catch (error) {
    res.status(500).send("error.message")
  }
})


router.post('/addCustomer', express.json(), async (req, res) => {
  try {
    const customer = req.body;
    console.log(customer);

    const newCustomer = await addCostumer(customer)
    res.status(201).send({ newCustomer })
  }
  catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router;
