const express = require('express')
const http = require('http')
//import * as PIXI from 'pixi.js'
const port = 3000

const viewPortWidth = 1920
const viewPortHeight = 1080
// let app = new PIXI.Application({ width: viewPortWidth, height: viewPortHeight })

// document.body.appendChild(app.view)

const requestListener = function (req, res) {
  res.writeHead(200)
  res.end('Hello, World!')
}

const server = http.createServer(requestListener)
server.listen(port)
