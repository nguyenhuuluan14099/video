var video1 = document.querySelector(".duoi .trai .video1");
var video1a = document.getElementById("pos1");
var video2 = document.getElementById("pos2");
var video3 = document.getElementById("pos3");
var btn1 = document.getElementById("nut1");
var btn2 = document.getElementById("nut2");
var btn3 = document.getElementById("nut3");

var buttonPlay = document.querySelector(".fullslides .tren .buttonplay i");
buttonPlay.addEventListener("click",()=>{
    if(video1.paused){
        video1.play();
    }else{
        video1.pause()
    }
    buttonPlay.classList.toggle("remove");
})
video1.addEventListener("click",()=>{
    if(video1.paused){
        video1.play();
    }else{
        video1.pause()
    }
    buttonPlay.classList.toggle("remove");
})
btn1.addEventListener("click",()=>{
    if(video1a.paused){
        video1a.play();
    }else{
        video1a.pause()
    }
    btn1.classList.toggle("remove");
})
video1a.addEventListener("click",()=>{
    if(video1a.paused){
        video1a.play();
    }else{
        video1a.pause()
    }
    btn1.classList.toggle("remove");
})


btn2.addEventListener("click",()=>{
    if(video2.paused){
        video2.play();
    }else{
        video2.pause()
    }
    btn2.classList.toggle("remove");
})
video2.addEventListener("click",()=>{
    if(video2.paused){
        video2.play();
    }else{
        video2.pause()
    }
    btn2.classList.toggle("remove");
})
btn3.addEventListener("click",()=>{
    if(video3.paused){
        video3.play();
    }else{
        video3.pause()
    }
    btn3.classList.toggle("remove");
})
video3.addEventListener("click",()=>{
    if(video3.paused){
        video2.play();
    }else{
        video3.pause()
    }
    btn3.classList.toggle("remove");
})