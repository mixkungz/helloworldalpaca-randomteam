const router = require('express').Router()

const IdController = require('./controllers/Id.controller')

router.route('/id/:id').get(IdController.getIdById)

module.exports = router