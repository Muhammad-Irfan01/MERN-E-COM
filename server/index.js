require('dotenv').config()
const express = require('express')
const app = express()
const Router = require('./Routes/Router')
const cors = require('cors')
require('./DataBase/DB')

app.use(express.json())
app.use(cors())
app.use('/', Router);



const port = process.env.PORT
app.listen (port, () => {
    console.log(`Server is running on Port ${port}`);
})

