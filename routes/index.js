const { Router } = require('express')
const quotesController = require('../controllers/quote')
const bookingsController = require('../controllers/booking')
const itemsController = require('../controllers/item')
const reviewsController = require('../controllers/review')
const quoteItemsController = require('../controllers/quoteItem')
const bookingItemsController = require('../controllers/bookingItem')
const contactsController = require('../controllers/contact')
// const auth = require('../controllers/auth')
// const admin = require('../controllers/admin')
// const verifyToken = require('../middleware/index.js').verifyToken

const router = Router()

// console.log(verifyToken, 'verifyToken')
router.get('/', (req, res) => res.send('Welcome to UpackHaulers!'))

// quotes routes

router.get('/quote_request', quotesController.quoteEmailRequest)
router.get('/quotes', quotesController.getAllQuotes)
router.get('/quotes/:id', quotesController.getQuote)
router.post('/quotes', quotesController.createQuote)
router.put('/quotes/:id', quotesController.updateQuote)
router.put('/send_quote/:id', quotesController.finalizeQuote)
router.delete('/quotes/:id', quotesController.deleteQuote)

// bookings routes

router.get('/bookings', bookingsController.getAllBookings)
router.get('/bookings/:id', bookingsController.getBooking)
router.post('/bookings', bookingsController.createBooking)
router.put('/bookings/:id', bookingsController.updateBooking)
router.delete('/bookings/:id', bookingsController.deleteBooking)

// items routes

router.get('/items', itemsController.getAllItems)
router.get('/items/:id', itemsController.getItem)
router.post('/items', itemsController.createItem)
router.post('/items/:id', itemsController.updateItem)
router.delete('/items/:id', itemsController.deleteItem)

// reviews routes

router.get('/reviews', reviewsController.getAllReviews)
router.get('/reviews/:id', reviewsController.getReview)
router.post('/reviews', reviewsController.createReview)
router.put('/reviews/:id', reviewsController.updateReview)
router.delete('/reviews/:id', reviewsController.deleteReview)

//contacts routes

router.post('/contacts', contactsController.createContact)

//quote_item routes

router.get('/quote_items', quoteItemsController.getAllQuoteItems)
router.get('/quote_items/:quote_id', quoteItemsController.getAllQuoteItemsByQuote)
router.post('/quote_items', quoteItemsController.createQuoteItem)
router.put('/quote_items/:item_id/:quote_id', quoteItemsController.updateQuoteItem)
router.delete('/quote_items/:item_id/:quote_id', quoteItemsController.deleteQuoteItem)

//booking_item routes

router.get('/booking_items/:booking_id', bookingItemsController.getAllBookingItemsByBooking)
router.post('/booking_items', bookingItemsController.createBookingItem)
router.put('/booking_items/:item_id/:booking_id', bookingItemsController.updateBookingItem)
router.delete('/booking_items/:item_id/:booking_id', bookingItemsController.deleteBookingItem)

//auth routes

// router.post('/login', auth.login)

//admin routes

// router.get('/admin', admin.getAdmin)
// router.put('/admin/:id', admin.updateAdmin)

// Routes with verifyToken

// // quotes routes

// router.get('/quotes', verifyToken, quotesController.getAllQuotes)
// router.get('/quotes/:id', verifyToken, quotesController.getQuoteById)
// router.post('/quotes', verifyToken, quotesController.createQuote)
// router.put('/quotes/:id', verifyToken, quotesController.updateQuote)
// router.delete('/quotes/:id', verifyToken, quotesController.deleteQuote)

// // bookings routes

// router.get('/bookings', verifyToken, bookingsController.getAllBookings)
// router.get('/bookings/:id', verifyToken, bookingsController.getBookingById)
// router.post('/bookings', verifyToken, bookingsController.createBooking)
// router.put('/bookings/:id', verifyToken, reviews.updateBooking)
// router.delete('/bookings/:id', verifyToken, bookingsController.deleteBooking)

// // items routes

// router.get('/items', verifyToken, itemsController.getAllItems)
// router.get('/items/:id', verifyToken, itemsController.getItemById)
// router.post('/items', verifyToken, itemsController.createItem)
// router.delete('/items/:id', verifyToken, itemsController.deleteItem)

// // reviews routes

// router.get('/reviews', verifyToken, reviewsController.getAllReviews)
// router.get('/reviews/:id', verifyToken, reviewsController.getReviewById)
// router.post('/reviews', verifyToken, reviewsController.createReview)
// router.put('/reviews/:id', verifyToken, reviewsController.updateReview)
// router.delete('/reviews/:id', verifyToken, reviewsController.deleteReview)

// //quote_item routes

// router.get('/quote_items', verifyToken, quoteItemsController.getAllQuoteItems)
// router.post('/quote_items', verifyToken, quoteItemsController.createQuoteItem)
// router.put('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.updateQuoteItem)
// router.delete('/quote_items/:item_id/:quote_id', verifyToken, quoteItemsController.deleteQuoteItem)

// //booking_item routes

// router.get('/booking_items', verifyToken, bookingItemsController.getAllBookingItems)
// router.post('/booking_items', verifyToken, bookingItemsController.createBookingItem)
// router.put('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.updateBookingItem)
// router.delete('/booking_items/:item_id/:booking_id', verifyToken, bookingItemsController.deleteBookingItem)

module.exports = router