const router = require('express').Router()

const IdController = require('./controllers/Id.controller')
const team = ["Front-End","Design","Game","Infra"]

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

module.exports = router