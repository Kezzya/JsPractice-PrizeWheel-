let wheel=document.getElementById('prizeWheel');

let looper;
let degrees = 0;

function rotateAnimation(el, speed){
	let elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
    }
    degrees++;
    if(degrees >= 500){
        alert("Вы выиграли скидку в 50%!");
    }
    else if(degrees<500){
        looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')', speed);
    }

}
let el = document.getElementById("buttonSpin");
el.onclick = function(){
    el.addEventListener('click', rotateAnimation("prizeWheel", 5));
}