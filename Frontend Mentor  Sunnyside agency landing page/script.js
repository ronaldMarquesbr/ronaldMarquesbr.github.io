// seta menu
var set = document.getElementById("set");
var ctx = set.getContext("2d");

ctx.moveTo(30,0);
ctx.lineTo(0,30);
ctx.lineTo(30,30);
ctx.strokeStyle = '#FFFFFF'
ctx.fillStyle = '#FFFFFF'
ctx.stroke();
ctx.fill()

// menu

let menu = document.getElementById("icon-menu");

menu.addEventListener('click', function(){

    let check = document.querySelector("#bt_menu");
    let menuMobile = document.querySelector(".menu");
    
    if(check.checked == false){
        check.checked = true;
    }
    else{
        check.checked = false;
    }
})
