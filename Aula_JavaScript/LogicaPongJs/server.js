//import '/index'
const express = require('express')
const http = require('http')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('<h1> Server on localhost:3000 with ExpressJS</h1>')
})
