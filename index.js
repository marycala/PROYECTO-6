require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const fabricantesRouter = require('./src/api/routes/fabricantes')
const modelosRouter = require('./src/api/routes/modelos')

const app = express()

app.use(express.json())

connectDB()

app.use('/api/v1/fabricantes', fabricantesRouter)
app.use('/api/v1/modelos', modelosRouter)

app.use('*', (req, res, next) => {
  return res.status(200).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000')
})
