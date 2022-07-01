const express = require('express')

// import middlewares
const cors = require('cors')
const bodyParser = require('body-parser')

// instantiate express
const app = express()

// set default port 
const PORT = process.env.PORT || 5000

// application level middleware
app.use(bodyParser.json()) // processes only json 
app.use(cors())
app.use(bodyParser.urlencoded({extended: false})) // returns object type

// import routes
const Users = require('./routes/Users')
const Products = require('./routes/Products')

// add routes as application level middleware
app.use('/users', Users)
app.use('/products', Products)

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})