import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
// Create a new express app instance
const app: express.Application = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get database configuration
require('./database')

// Add authenticate middleware
// server.use(authMiddleware)

app.listen(5000, () => {
  console.log('App is listening on port 5000!')
})
