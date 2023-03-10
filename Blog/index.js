/* onload window */
window.onload = function(){
var y = localStorage.getItem("theme");
var x = document.getElementById("bx-moon");


if(y =="dark"){
document.body.classList.add("dark-theme");
document.body.classList.remove("light-theme");
x.classList.replace("bx-moon", "bxs-sun");
}	
else if(y =="light"){
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
x.classList.replace("bxs-sun", "bx-moon");
}	
else{
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
x.classList.replace("bxs-sun", "bx-moon");
}				
}




/* theme toggler */
document.getElementById("theme-toggler").onclick = function(){
var x = document.getElementById("bx-moon");
var body = document.body;


if(x.classList.contains("bx-moon")){
body.classList.remove("light-theme");
body.classList.add("dark-theme"); 			
x.classList.replace("bx-moon", "bxs-sun");
localStorage.setItem("theme", "dark");
}
else{
body.classList.remove("dark-theme");
body.classList.add("light-theme"); 			
x.classList.replace("bxs-sun", "bx-moon");
localStorage.setItem("theme", "light");
}
}



/* custom goto function */
function goTo(x){
window.location = x;
}


/* for back to top button */
window.onscroll  = () =>{
const val = window.scrollY / 8;
if(val > 90){
document.getElementById("back-to-top").style.display ="flex";	
}
else{
document.getElementById("back-to-top").style.display ="none";	
}}