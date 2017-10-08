// init ID
// const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const head = {
  frontEnd: ['tae', 'bas', 'mix', 'tul', 'nut', 'a', 'boat', 'guide', 'jo', 'fluke'],
  design: [],
  game: [],
  infra: []
}  

let getId = args => {
  return head.frontEnd[args]
}

module.exports = {
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