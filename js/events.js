/* navbar */
  // search-box open close js code
let navbar = document.querySelector(".navbar");
/*  let searchBox = document.querySelector(".search-box .bx-moon"); */
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

/*  
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-moon" ,"bxs-sun");
  }else {
    searchBox.classList.replace("bxs-sun" ,"bx-moon");
  }
}); */

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
document.body.classList.add("overlay-dark");
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
document.body.classList.remove("overlay-dark");
}

document.addEventListener('mouseup', function(e) {
var container = navLinks;
if (!container.contains(e.target)){
navLinks.style.left = "-100%"; 
document.body.classList.remove("overlay-dark");
}});	



// sidebar submenu open close js code
/*
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
 */




/* onload window */
window.onload = function(){
var y = localStorage.getItem("theme");
//var x = document.getElementById("bx-moon");
document.querySelectorAll("#seventh-row .card").forEach( elem =>{
elem.click();
});

if(y){
document.body.classList.add("dark-theme");
document.body.classList.remove("light-theme");
//x.classList.replace("bx-moon", "bxs-sun");
}				
}




/* theme toggler */
/*  document.getElementById("bx-moon").onclick = function(){
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
} */


window.onscroll = () =>{
const val = window.scrollY / 8;
const value = 100 - val;
var anime1 = document.getElementsByClassName("anime")[0];
var anime2 = document.getElementsByClassName("anime")[1];

/*  if(value > -100/100){
anime1.style.scale =`${value}%`; 
anime2.style.scale =`${value}%`;
} */


/* for back to top button */
if(val > 80){
document.getElementById("back-to-top").style.display ="flex";	
}
else{
document.getElementById("back-to-top").style.display ="none";	
}


/* for register button 
if(val > 60 && window.matchMedia("(max-width: 600px)").matches){
document.getElementById("register-bt").style.display ="block";	
}
else{
document.getElementById("register-bt").style.display ="none";	
}
 */
};

























/* elastic email */
document.getElementById("copy-date").innerHTML = new Date().getFullYear();

function newsMail(){
event.preventDefault();
  var params = {
    email_id: document.getElementById("news-email").value,
  };
document.getElementById("news-submit").innerHTML =`<i class="bx bx-spin bx-loader-circle"></i>`; 


  const serviceID = "service_jogdt1q";
  const templateID = "template_ber1dwg";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        console.log(res);
 document.getElementById("news-submit").innerHTML =`<i class="bx bx-check-circle"></i>`; 
newsSuccess();
 
 
  /*  setTimeout(function(){
document.getElementById("news-submit").innerHTML ="Go";	
document.querySelector("#foot-news form button").style.padding ="10px 0";
document.getElementById("news-email").value ="";
}, 3000); */
    })
    .catch(err=> newsError());
}








function newsSuccess(){
Swal.fire({
title: '<h1 style="font-size: 20px;margin:0;padding: 0;line-height: 1;">Thank you !</h1>', 
html: '<p>Form submitted successfully</p>', 
icon: 'success', 
background: 'var(--cardbg)',
color: 'var(--font)',
confirmButtonText: 'Ok, done',
focusConfirm: true,
}).	then(function(){ 
document.getElementById("news-submit").innerHTML ="Go";	
document.getElementById("news-email").value ="";
});	 
}



function newsError(){
Swal.fire({
title: '<h1 style="font-size: 20px;margin:0;padding: 0;line-height: 1;">Oh! Error</h1>', 
html: '<p>Form not submitted, </p>', 
icon: 'error', 
background: 'var(--cardbg)',
color: 'var(--font)',
confirmButtonText: 'Ok, retry',
focusConfirm: true,
}).	then(function(){ 
document.getElementById("news-submit").innerHTML ="Go";				
document.getElementById("news-email").value ="";
});	 

document.getElementById("news-submit").innerHTML =`<i class="bx bx-error-circle"></i>`;			
}

