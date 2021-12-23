
const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({origin: ['http://localhost:3001']}))
app.use('/', routes)

const PORT = process.env.PORT || 3000 
                      
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));