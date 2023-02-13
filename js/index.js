/* navbar */
  // search-box open close js code
let navbar = document.querySelector(".navbar");
/*  let searchBox = document.querySelector(".search-box .bx-moon"); */
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

/*  
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-moon" ,"bx-sun");
  }else {
    searchBox.classList.replace("bx-sun" ,"bx-moon");
  }
}); */

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
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






/* onload window */
window.onload = function(){
var y = localStorage.getItem("theme");
var x = document.getElementById("bx-moon");
if(y =="dark"){
document.body.classList.add("dark-theme");
document.body.classList.remove("light-theme");
x.classList.replace("bx-moon", "bx-sun");
}	
else if(y =="light"){
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
x.classList.replace("bx-sun", "bx-moon");
}	
else{
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
x.classList.replace("bx-sun", "bx-moon");
}				
}




/* theme toggler */
document.getElementById("bx-moon").onclick = function(){
var x = document.getElementById("bx-moon");
var body = document.body;


if(x.classList.contains("bx-moon")){
body.classList.remove("light-theme");
body.classList.add("dark-theme"); 			
x.classList.replace("bx-moon", "bx-sun");
localStorage.setItem("theme", "dark");
}
else{
body.classList.remove("dark-theme");
body.classList.add("light-theme"); 			
x.classList.replace("bx-sun", "bx-moon");
localStorage.setItem("theme", "light");
}
}




















/*  
window.onscroll = () =>{
const value = window.scrollY / 8;
var anime1 = document.getElementsByClassName("anime")[0];
var anime2 = document.getElementsByClassName("anime")[1];

anime1.style.marginLeft = `${value}%`; 
anime2.style.marginRight = `${value}%`; 
};
 */
 
 
 
 
window.onscroll = () =>{
const val = window.scrollY / 8;
const value = 100 - val;
var anime1 = document.getElementsByClassName("anime")[0];
var anime2 = document.getElementsByClassName("anime")[1];

if(value > -100){
anime1.style.scale =`${value}%`; 
anime2.style.scale =`${value}%`; 
}
};












/* codes */

var editor = ace.edit("code-box"); 
editor.setTheme("ace/theme/github_dark");
editor.setReadOnly(true);
editor.renderer.setShowGutter(false);
editor.getSession().setMode("ace/mode/javascript");
editor.setValue(`const validationRules = (value, rules, form) => {
  let valid = true;
  var keywords = "jelo"
  keywords.toLocaleLowerCase()
  }

  return valid;
};` ,1);				




document.getElementsByTagName("select")[0].onchange = function(){
if(this.value ==="javascript"){
editor.getSession().setMode("ace/mode/javascript");
editor.setValue(`const validationRules = (value, rules, form) => {
  let valid = true;
  var keywords = "jelo"
  keywords.toLocaleLowerCase()
  }

  return valid;
};` ,1);				
}		

else if(this.value ==="python"){
editor.getSession().setMode("ace/mode/python");
editor.setValue(`import pygal

data = [
  ["Python", 30.3],
  ["Java", 22.2],
  ["C++", 13],
  ["Ruby", 10.6],
  ["Javascript", 5.2],
  ["C#", 5],
  ["C", 4.1]
]
# Make a Pygal chart
pie_chart = pygal.Pie()

# add a title
pie_chart.title = "CodeEval Most Popular Coding Languages of 2014"

# add the data
for label, data_points in data:
    pie_chart.add(label, data_points)

# Render the chart    
pie_chart.render()` ,1);
}
}


























/* num_toggle */
document.getElementById("num_toggle").onclick = function(){
var x = document.getElementById("num_toggle");
if(x.style.justifyContent ==="flex-end"){
x.style.justifyContent ="flex-start";
editor.renderer.setShowGutter(false);
}
else{
x.style.justifyContent ="flex-end";
editor.renderer.setShowGutter(true);
}}


