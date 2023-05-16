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
document.addEventListener("DOMContentLoaded", (event) => {
 "use-strict";
document.head.innerHTML +=`<meta name="theme-color" content="#5865f2">`;
}); 
 
 
/* onload window */
window.onload = function(){
var y = localStorage.getItem("theme");
var x = document.getElementById("bx-moon");
document.getElementById("copy-date").innerHTML = new Date().getFullYear();
document.getElementById("comment-count").innerHTML = document.getElementsByClassName("comment").length;

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



/* custom goto function */
function goTo(x){
window.location = x;
}

/* for back to top button */
window.onscroll  = () =>{
progressBarScroll();
const val = window.scrollY / 8;
if(val > 90){
document.getElementById("back-to-top").style.display ="flex";	
}
else{
document.getElementById("back-to-top").style.display ="none";	
}}





/* Categories select */
document.getElementById("cat-select").onchange = function(){
window.location = this.value;
this.value ="#";
}





/* author */
var DeependraAuthor = {
Name:"Deependra Gaur",
Img:"../img/logo.jpg",
About:"Jamstack Developer / Technical Content Writer. After all is said and done, structure + order = fun."
}
var AshutoshAuthor = {
Name:"Ashutosh Pandey",
Img:"../img/ashu.jpg",
About:"Aspiring front-end developer and self-taught coder. Dedicated to building websites that not only look great but also function flawlessly."
}
var JyotiAuthor = {
Name:"Jyoti Bhasin",
Img:"../img/jyoti.jpg",
About:`Enthusiastic Coder/Technical Content Writer.
Building a better tomorrow with every line of code`,
}
var SanjayAuthor = {
Name:"Sanjay Vivekanandan",
Img:"../img/sanjay.jpg",
About:`A medical student with a knack for writing engaging blog content. As a content writer specializing in blogs, I love crafting articles that are informative.`,
}







function author(x){
document.getElementById("author-detail").style.display ="block";
document.body.classList.add("author-overlay");


document.querySelector("#author-detail div img").src = x.Img;
document.querySelector("#author-detail div h1").innerHTML = x.Name;
document.getElementById("author-detail-p").innerHTML = x.About;
}

/* close author details div */
document.querySelector("#author-detail .bx-x").onclick  = () =>{
document.getElementById("author-detail").style.display ="none";
document.body.classList.remove("author-overlay");
}







/* copy code */
var copyCodes = document.getElementsByClassName("copy-code");
Array.prototype.forEach.call(copyCodes, function(copyCode, index){
copyCode.onclick = () => {
 if(!navigator.clipboard){
alert("Copying to clipboard is not supported on this browser.");
return;
 }
 
var codes = document.getElementsByClassName("code");
if (codes[index]){
var codeText =  codes[index].innerText;
navigator.clipboard.writeText(codeText).then(() => { 
var copiedText = copyCode.querySelector(".bx-copy");
copiedText.classList.replace("bx-copy", "bx-check-circle");
setTimeout(() => copiedText.classList.replace("bx-check-circle", "bx-copy"), 3000);
  }).catch((error) => {
  console.error(error);
  alert("Failed to copy code to clipboard.");
  });
}
  }//onclick function ended
});






/* page scroll progress bar */
function progressBarScroll(){
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.querySelector("#scroll-progress div").style.width = scrolled + "%";
}