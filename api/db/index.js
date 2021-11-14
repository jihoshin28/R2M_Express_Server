const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
// Add mongoDB url
const mongoDB = 'mongodb://127.0.0.1/lugg_database' 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

module.exports = db