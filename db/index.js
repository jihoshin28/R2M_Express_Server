const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// async function tryConnection () {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     }
// }

// tryConnection()

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db