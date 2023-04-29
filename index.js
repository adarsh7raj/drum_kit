var i;
for(i=0;i<=6;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    
   var au=this.innerHTML;
   drum_sound(au);
   button_animation(au);
});
   

}


function drum_sound(key){
    switch(key){
        case"w":
        var audio1=new Audio("tom-1.mp3");
        audio1.play();
        break;
        case"a":
        var audio2=new Audio("tom-2.mp3");
        audio2.play();
        break;
        case"s":
        var audio3=new Audio("tom-3.mp3");
        audio3.play();
        break;
        case"d":
        var audio4=new Audio("tom-4.mp3");
        audio4.play();
        break;
        case"j":
        var audio5=new Audio("snare.mp3");
        audio5.play();
        break;
        case"k":
        var audio6=new Audio("crash.mp3");
        audio6.play();
        break;
        case"l":
        var audio7=new Audio("kick-bass.mp3");
        audio7.play();
        break;
default:

    }
}
document.addEventListener("keypress",function(event){
    drum_sound(event.key);
    button_animation(event.key);
});
function button_animation(press){
   var active_button= document.querySelector("."+press);

    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100)
}


