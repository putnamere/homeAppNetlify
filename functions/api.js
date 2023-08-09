const express = require('express')
const serverless = require('serverless-http')
const fs = require('fs')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
//    res.sendFile(__dirname + '/page/index.html')
    console.log(__dirname)
    res.send("is it working?")
})

router.get('/index.js', (req, res) => {
    res.sendFile(__dirname + "/page/index.js")
})

router.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/page/style.css")
})

router.get('/imgs/*', (req, res) => {
    let file = req.path.replace(/\/[a-z]+\//g, '')
    file = __dirname + `\\page\\imgs\\${file}`
    if (fs.existsSync(file)) {
        let img = fs.readFileSync(file)
        res.writeHead(200, { 'Content-Type': 'image/png'})
        res.end(img, 'binary')
    } else {
      res.statusCode = 404
      console.log(`Not an Image ${file}`)
      res.end('Not Found')
    }
})

app.use('/', router)

module.exports.handler = serverless(app, {
    binary: ['image/png']
})
