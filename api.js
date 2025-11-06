const { Router } = require('express')

const api = new Router()

api.get('/create', (req, res) => res.json({ id: Date.now() }))

module.exports = api
