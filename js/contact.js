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
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}

/*  
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
 */




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
document.getElementById("bx-moon").onclick = function(){
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













/* elastic email */
function contactMail(){
event.preventDefault();
  var params = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };
document.getElementById("sub-icon").innerHTML =`<i class="bx bx-spin bx-loader-circle"></i>`; 


  const serviceID = "service_jogdt1q";
  const templateID = "template_xfmgywg";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        console.log(res);
 document.getElementById("sub-icon").innerHTML =`<i class="bx bx-check-circle"></i>`;
 newsSuccess();
 
   /*   setTimeout(function(){
document.getElementById("sub-icon").innerHTML =`<i class="bx bx-send"></i>`;	
document.getElementById("contact-form").reset();
}, 4000); */

    })
    .catch(err=> newsError(err));
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
document.getElementById("sub-icon").innerHTML =`<i class="bx bx-send"></i>`;	
document.getElementById("contact-form").reset();
});	 
}




function newsError(x){
Swal.fire({
title: '<h1 style="font-size: 20px;margin:0;padding: 0;line-height: 1;">Oh! Error</h1>', 
html: '<p>Form not submitted, </p>', 
icon: 'error', 
background: 'var(--cardbg)',
color: 'var(--font)',
confirmButtonText: 'Ok, retry',
focusConfirm: true,
}).	then(function(){ 
document.getElementById("sub-icon").innerHTML =`<i class="bx bx-send"></i>`;	
document.getElementById("contact-form").reset();
});	 

document.getElementById("sub-icon").innerHTML =`<i class="bx bx-error-circle"></i>`;	


/*  
setTimeout(function(){ 	document.getElementById("sub-icon").innerHTML =`<i class="bx bx-error-circle"></i>`;			
 }, 1500);

 setTimeout(function(){
document.getElementById("sub-icon").innerHTML =`<i class="bx bx-send"></i>`;
document.getElementById("contact-form").reset();}, 3000); */
}
