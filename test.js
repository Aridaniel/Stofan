
document.getElementById("contact-form").addEventListener("submit",(e)=>{
    e.preventDefault()
})

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

var umokkur = document.getElementById('umokkurhverfa');
var verkefni = document.getElementById('verkefnihverfa');
var hafasamband = document.getElementById('hafasambandhverfa');


menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
   
})

exit.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    
})

umokkur.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
   
})

verkefni.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
   
})

hafasamband.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    
})

