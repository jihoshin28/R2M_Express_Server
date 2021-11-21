const Sequelize = require('sequelize')
const sequelize = new Sequelize('upack_haulers', 'allen', 'jeeho123', {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
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