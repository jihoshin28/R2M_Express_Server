module.exports = {
    HOST: 'localhost',
    USER: 'allen',
    PASSWORD: 'jeeho123',
    DB: 'upack_haulers', 
    dialect: 'postgres',
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}