function closed(){
    document.getElementById("tryluckbuttoncont").style.display="none"
}

function spinng(){
    var randomnum=Math.floor(Math.random()*360)
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=randomnum*1000+"deg"
}

