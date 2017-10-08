// init ID
<<<<<<< HEAD
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const _BACKUP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=======
// const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const head = {
  frontEnd: ['tae', 'bas', 'mix', 'tul', 'nut', 'a', 'boat', 'guide', 'jo', 'fluke'],
  design: [],
  game: [],
  infra: []
}  
>>>>>>> f33cb3bb0e15d706495996055c9b6b7f3bf74861

let getId = args => {
  return head.frontEnd[args]
}

let getAll = () => {
  return ID
}

module.exports = {
  reset: () => {
    return new Promise( async (res, rej) => {
      try {
        ID = _BACKUP
        let allId = await getAll()
        res(allId)
      } catch (error) {
        rej(error)
      }
    })
  },
  getOne: args => {
    return new Promise( async (res, rej) => {
      try {
        let id = await getId(args)
        res(id)
      } catch (error) {
        rej(error)
      }
    })
  },
  getAll: args => {
    return new Promise( async (res, rej) => {
      try {
        let data = head.frontEnd
        res(data)
      } catch (error) {
        rej(error)
      }
    })
  }
}