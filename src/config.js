// import {config} from 'dotenv';
const {config}= require('dotenv')
config();
const configurations = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 4000,
    }
}
module.exports= configurations;