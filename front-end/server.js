// import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'
express = require('express')
path = require('path')
fileURLToPath = require('url').fileURLToPath

const app = express()
// __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Frontend service running at http://localhost:3000')
  console.log(
    'Accessible on your LAN using your machine IP, e.g. http://192.168.x.x:3000'
  )
})
