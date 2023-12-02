const {Pool} = require("pg")

const pool = new Pool ({

    user : 'postgres',
    host : 'localhost',
    database : 'dbrental',
    port : 5432,
    password : '12345'
})




module.exports = pool
