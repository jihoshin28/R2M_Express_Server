const express = require('express')
const router = express.Router()

// Require controllers
const customerController = require('../controllers/customer')
const driverController = require('../controllers/driver')
const orderController = require('../controllers/order')
const cardController = require('../controllers/card')
const authController = require('../controllers/auth')

router.get('/', (req, res) => {
    res.send({ response: "Main chat page"}).status(200)
})

// Customer routes
router.get('/customers/:id', customerController.getCustomer)
router.post('/customers', customerController.createCustomer)
router.patch('/customers/:id', customerController.updateCustomer)
router.delete('/customers/:id', customerController.deleteCustomer)

// Driver routes
router.get('/drivers/:id', driverController.getDriver)
router.post('/drivers', driverController.createDriver)
router.patch('/drivers/:id', driverController.updateDriver)
router.delete('/drivers/:id', driverController.deleteDriver)

// Order routes
router.get('/orders/:id', orderController.getOrder)
router.get('/orders', orderController.getOrders)
router.post('/orders', orderController.createOrder)
router.patch('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)

// Card routes
router.get('/cards/:customer_id', cardController.getCustomerCards)
router.post('/cards', cardController.createCard)
router.patch('/cards/:id', cardController.updateCard)
router.delete('/cards/:id', cardController.deleteCard)

//Auth routes
router.post('/login', authController.Login)
router.post('/googleAuth', authController.GoogleAuth)
router.post('/phoneAuth', authController.PhoneAuth)

module.exports = router