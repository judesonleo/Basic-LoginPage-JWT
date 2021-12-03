const express = require('express')
const router = express.Router()
const {login, dashboard}= require('../controllers/main')
const authM = require('../middleware/auth')

router.route('/dashboard').get(authM,dashboard)
router.route('/login').post(login)

module.exports =  router