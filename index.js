const express = require('express')
const app = express()
const { getPort } = require('./config.js')

app.use(express.static('public'))

app.use('/api', require('./api.js'))

app.listen(getPort(), () => console.log(`It's on port ${getPort()}`))
