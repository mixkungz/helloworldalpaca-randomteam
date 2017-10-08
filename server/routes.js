const router = require('express').Router()

const IdController = require('./controllers/Id.controller')
const team = ["Front-End","Design","Game","Infra"]

<<<<<<< HEAD
router.route('/id/reset').post(IdController.resetId)
router.route('/id/:id').get(IdController.getIdById)
=======
let unsupport = (req, res) => {
    res.json({
        status: false,
        message: 'team not support! route'
    })
}

router.route(`/random/${team[0]}/:name`).get(IdController.getTeamFrontEnd)
for(let i=1; i<team.length; i++){
    router.route(`/random/${team[i]}/:name`).get(unsupport)
}
router.route('/all').get(IdController.getAll)
router.route('/reset/:code').get(IdController.reset)
>>>>>>> f33cb3bb0e15d706495996055c9b6b7f3bf74861

module.exports = router