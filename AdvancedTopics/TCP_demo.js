/**
 * Created by boris on 7/11/2017.
 */
const server = require('net').createServer()
let counter = 0
let sockets = []
server.on('connection', socket => {
    socket.id = counter++
    sockets.push(socket)
    console.log('User connected')
    socket.on('data', data => {
        console.log(data)
        for(let cs of sockets){
            if(socket!==cs){
                cs.write(`${socket.id}: ${data}`)
            }else{
                cs.write(`Me: ${data}`)
            }
        }
    })
    socket.on('end', (socket) => {
        console.log('User disconnected')
        sockets.splice(socket.indexOf(),1)
    })
}).listen(1337, () =>{console.log('Server listening on port 1337...')})