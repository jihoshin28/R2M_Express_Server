require('dotenv').config()
module.exports = {
  "development": {
    "username": "allen",
    "password": "jeeho123",
    "database": "upack_haulers",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "allen",
    "password": "jeeho123",
    "database": "upack_haulers",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "port": 5432,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
          "require": true,
          "rejectUnauthorized": false
      }
    }
  }
}
