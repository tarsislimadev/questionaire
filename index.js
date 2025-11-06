const express = require('express')
const app = express()
const { getPort } = require('./config.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(getPort(), () => {
    console.log(`Example app listening on port ${getPort()}`)
})
