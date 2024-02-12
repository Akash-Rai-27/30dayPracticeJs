// const insert = document.querySelector('keys').addEventListener('keydown',function(e){
//     if(escape)
// })

// const presskey = document.querySelector('keys').addEventListener('keydown',function(e){

// })

window.addEventListener('keydown',function(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return ;
    audio.currentTime = 0; // rewind to start
    audio.play();

})
