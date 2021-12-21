const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    database: "dfodqifg0o195a",
    username: "qmsslupljiwdog",
    password: "cab52ea33ebaa669601bc4426024af19a40c4608990c28de6fd195b55cc0c4b5",
    host: "ec2-34-204-127-36.compute-1.amazonaws.com",
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