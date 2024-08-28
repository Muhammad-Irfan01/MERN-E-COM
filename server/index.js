const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const port = 8000
app.listen (port, () => {
    console.log(`Server is running on Port ${port}`);
})