let socket=io.connect('http://localhost:4000/')

let mensaje=document.getElementById('message')
let    titulo=document.getElementById('handle')
 let   btn=document.getElementById('send')
 let   ouput=document.getElementById('ouput')
 let   feedback=document.getElementById('feedback')
//emicion de eventos
    btn.addEventListener('click',function(){

        //socket.emit(evento,datos)
        socket.emit('chat',{
            mensaje:mensaje.value,
            titulo:titulo.value
        })
    })


mensaje.addEventListener('keypress',function(){
    socket.emit('typing',titulo.value)
})


    //escuchar los eventos
    socket.on('chat',function(data){
        ouput.innerHTML+='<p><strong>' + data.titulo + ':</strong>' + data.mensaje + '</p>'
        //template string
    })



    socket.on('typing',function(data){
        feedback.innerHTML= '<p><em>' + data + 'esta escribiendo ....</em></p>'
    })