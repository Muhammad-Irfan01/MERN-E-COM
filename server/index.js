require('dotenv').config()
const express = require('express')
const app = express()
const Router = require('./Routes/Router')
const cors = require('cors')
require('./DataBase/DB')

app.use(express.json())
app.use(cors())
app.use('/', Router);



// Export the app for Vercel serverless deployment
module.exports = app;

