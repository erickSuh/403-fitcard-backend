const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// Create a new express app instance
const app = express()

const { category, state, company } = require('./database/models')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

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

app.get('/states', async (req, res) => {
  try {
    const states = await state.findAll()
    res.send(states)
  } catch (e) {
    res.send({
      status: 500,
      error: e,
    })
  }
})

app.get('/companies', async (req, res) => {
  try {
    const resp = await company.findAll()
    res.send(resp)
  } catch (e) {
    res.send({
      status: 500,
      error: e,
    })
  }
})

app.post('/companies', async (req, res) => {
  try {
    const resp = await company.create(req.body)
    res.send(resp)
  } catch (e) {
    res.send({
      status: 500,
      error: e,
    })
  }
})

app.listen(process.env.PORT || 5000, () => {
  console.log('App is listening on port 5000!')
})
