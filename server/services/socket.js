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

module.exports = (io) => {
  io.on('connection', function(socket) {
    console.log('socket connected')

    socket.on('random', (t) => {
        console.log(`team: ${t}`)
        
        // console.log(team['frontend'][0])
        switch(t){
                case 'developer':
                    let full = true
                    for(let i=0;i<team.frontend.length;i++){
                        if(team.frontend[i][1] < 3){
                            full = false
                            break
                        }
                    }
                    if(!full) {
                        let ran = 0
                        do {
                            ran = Math.floor(Math.random() * 10)
                        } while(team.frontend[ran][1] === 3)
                        console.log(`ran: ${ran}`)        
                        console.log(team.frontend[ran][0])
                        team.frontend[ran][1]++
                        console.log(team['frontend'])
                    }else{
                        console.log(`front-end full!`)                        
                    }
                    break;
                default: 
                    console.log('other team')
                // case 'design':
                //     break
                // case 'infra':
                //     break
                // case ''
        }
    //   console.log(`random ${room}`)
    })
  })
}
