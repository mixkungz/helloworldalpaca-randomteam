const router = require('express').Router()

const IdController = require('./controllers/Id.controller')

router.route('/id/reset').post(IdController.resetId)
router.route('/id/:id').get(IdController.getIdById)

module.exports = router