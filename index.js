const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db');
connectToMongo();


const app = express()
const port = 5000

app.use(cors())

app.use(express.json())


// Availabe Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`eNote listening at http://localhost:${port}`)
})