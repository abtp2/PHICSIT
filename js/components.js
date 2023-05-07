/* custom slide up,down and toggle function */
let slideUp = (target, duration, callback) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.boxSizing = 'border-box';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      if (typeof callback === "function") {
         callback();
      }
   }, duration);
}

let slideDown = (target, duration, callback) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none') display = 'block';
   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.boxSizing = 'border-box';
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      if (typeof callback === "function") {
         callback();
      }
   }, duration);
}



var slideToggle = (target, duration) => {
   if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
   } else {
      return slideUp(target, duration);
   }
}







/* custom all class selector function */
/*  function allClass(selector, callback){
[...document.querySelectorAll(selector)].forEach((classes) => {
callback;
});
}


allClass(".bx", fff());
function fff(){
classes.style.ouline ="2px solid red";
}
 */




/* localStorage */
function checkLocalStorageValue(value) {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (localStorage.getItem(key) === value) {
      return true;
    }
  }
  return false;
}
function getLocalStorageKeyByValue(value) {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (localStorage.getItem(key) === value) {
      return key;
    }
  }
  return null;
}
/* localStorage */





// custom function for fade out with opacity 
function fadeOut(element, duration, callback) {
  let opacity = 1;
  var elem = document.querySelector(element);
  const interval = 50; // ms
  const steps = duration / interval;
  let count = 0;
  const fadeOutInterval = setInterval(() => {
    opacity -= 1 / steps;
    elem.style.opacity = opacity;
    count++;
    if (count >= steps) {
      clearInterval(fadeOutInterval);
      elem.style.display = "none";
      if (typeof callback === 'function') {
        callback();
      }      
    }
  }, interval);
}








/* do height,width = 0 */
function h_w_0(x){
x.style.position ="absolute"; 
x.style.top ="-9999px";
x.classList.remove("matched");
}
/* do height,width = full */
function h_w_full(x){
x.style.position ="static";
x.style.top ="0px";
x.classList.add("matched");
}





/* coming soon */
function coming(x){
sessionStorage.setItem("comingTitle", x);
window.location ="coming.html";
}









/* social media links */
document.addEventListener("DOMContentLoaded", (event) => {
"use-strict";
const f =".bxl-facebook";
const t =".bxl-twitter";
const i =".bxl-instagram-alt";
const l =".bxl-linkedin";
const d =".bxl-discord-alt";
if(document.querySelector("body").innerHTML.includes("bxl-facebook")){
document.querySelectorAll(f).forEach(elem =>{
elem.href ="https://www.facebook.com/PHICSIT";
});
document.querySelectorAll(t).forEach(elem =>{
elem.href ="https://twitter.com/PHICSIT";
});
document.querySelectorAll(i).forEach(elem =>{
elem.href ="https://www.instagram.com/phicsit.in";
});
document.querySelectorAll(l).forEach(elem =>{
elem.href ="coming.html?q=LinkedIn Page";
});
document.querySelectorAll(d).forEach(elem =>{
elem.href ="https://discord.gg/EhdhdA4F4H";
});
}});

