var Player = require("../../src/player").Player;
var count = 0
var players = []
var team = {
    frontend: [
        ['bas', 0],
        ['tae', 0],
        ['mix', 0],
        ['tul', 0],
        ['nut', 0],
        ['fluke', 0],
        ['jo', 0],
        ['a', 0],
        ['boat', 0],
        ['guide', 0]
    ]
}

module.exports = function(io) {
    io.on('connection', function(socket) {

        socket.on('room', function() {
            io.emit('getallplayer', players)
        })

        
    })
  }