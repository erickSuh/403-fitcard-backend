const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// Create a new express app instance
const app = express()

const { category } = require('./database/models')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', async (req, res) => {
  try {
    const categories = await category.findAll()
    res.send(categories)
  } catch (e) {
    res.send({
      status: 500,
      error: e,
    })
  }
})

app.post('/company', async (req, res) => {
  try {
    const categories = await category.create(req.body)
    res.send(categories)
  } catch (e) {
    res.send({
      status: 500,
      error: e,
    })
  }
})

app.listen(5000, () => {
  console.log('App is listening on port 5000!')
})
