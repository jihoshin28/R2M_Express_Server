
const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({origin: ['http://localhost:3000', 'https://intense-oasis-88289.herokuapp.com']}))
app.use('/', routes)

const PORT = process.env.PORT || 3000 
                      
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));