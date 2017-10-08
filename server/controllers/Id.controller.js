const Id = require('../models/Id.model')

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let members = []
team = ["Front-End","Design","Game","Infra"]

module.exports = {
  getTeamFrontEnd: async (req, res) => {

      let full = true
      let name = req.params.name
      if(name==null){
        res.json({
          status: false,
          message: 'name undefined'
        })
      }
      name = name.trim().toLowerCase()
      if(name == 'แจ๊บ' || name == 'jab'){
        full = false
      }else{
        full = count.findIndex((data, index) => {
            if(index === 3){
                if(data < 2){
                    return data
                }
            }else{
                if(data < 3){
                    return data
                }
            }
        }) !== -1

      }
      
      // check duplicate name
      let duplicate = members.findIndex((data, index) => {
        if(data != null) {
          if(data.indexOf(name) > -1){
            return data
          }
        }
      }) !== -1

      if(duplicate) {
        res.json({
          status: false,
          message: 'you have team already'
        })
      } else if(full){
        res.json({
          status: false,
          message: 'team member full!'
        })
      } else {
        let id
        checkJab = false
        if(name == 'แจ๊บ' || name == 'jab'){
          id = 3
        }else{
          do {
            id = Math.floor(Math.random() * 10)
          } while(count[id] >= 3 || (id===3 && count[3] >= 2))
          // (id===3 && count[3] >= 2)
          // condition space for Jab!
        }

        let resolveId
        count[id]++
        if (members[id] == null) {
          members[id] = [name]
        } else {
          members[id].push(name)
        }
        resolveId = await Id.getOne(id)
    
        res.json({
          status: true,
          team: resolveId
        })
      }
    

  },
  getAll: async (req, res) => {
    
    res.json({
      count: count,
      members: members
    })
  },
  reset: (req, res) => {
    let code = req.params.code
    if(code === 'aLpacA') {
      count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.json({
        status: true,
        message: 'reset success'
      })
    }else{
      res.json({
        status: false,
        message: 'reset fail!'
      })
    }
  }
}