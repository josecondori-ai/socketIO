let  express=require('express')
let app = express()
let socket =require('socket.io')

let server =app.listen(4000,function(){
    console.log('se inicio el servidor')
})

app.use(express.static('public'))

let io=socket(server)
io.on('connection',function(socket){
    console.log('la conexion del socket se ha realizado')
    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    })

    socket.on('typing',function(data){
       socket.broadcast.emit('typing',data)
    })
})