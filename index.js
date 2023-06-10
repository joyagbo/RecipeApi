const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const sequelize = require('./config/connect.js')
const { rtm } = require('./routes/route.js')
const app = express()
const port = 3000
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',rtm)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})