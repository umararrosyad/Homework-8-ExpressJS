const fs = require('fs')
const pool = require('../config')
const path = require('path');

const seedFilePath = path.resolve(__dirname, 'seeding.sql');
const seedQuery = fs.readFileSync(seedFilePath, 'utf-8');

pool.query(seedQuery, (err,result)=>{
    if(err) throw err

    console.log('seeding success')
    pool.end()
})