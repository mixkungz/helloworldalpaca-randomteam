// init ID
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let getId = args => {
  return ID[args]
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
  }
}