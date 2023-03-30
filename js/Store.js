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



/*  
var localget = localStorage.getItem("cart");
if(localget != null){
const cartBooks =[localget];
document.getElementsByClassName("row")[1].innerHTML = cartBooks;
} */


/*  
  // Get the div where the stored cards should be displayed
  const displayDiv = document.getElementsByClassName("row")[1];

  // Loop through all the stored items in localStorage
  for (let i = 0; i < localStorage.length; i++) {
    // Get the card data from localStorage
    const cardData = localStorage.getItem(localStorage.key(i));

    // Create a new card element with removecart-btn and Remove item
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    cardDiv.innerHTML = cardData;
    console.log(cardData);  
    // Add the card to the displayDiv
    displayDiv.appendChild(cardDiv);
}
 */
 
 

var cartInner = localStorage.getItem("cartData");
if(document.getElementsByClassName("row")[1]){
document.getElementsByClassName("row")[1].innerHTML = cartInner;		
}


}//window.onload ended








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











/* search bar */

document.getElementById("search-toggle").onclick = () =>{
slideToggle(document.querySelector("#first form") , 100, searchBack());				
document.querySelector("#first form input").focus();
document.querySelector("#first form input").click();
}

document.onmouseup = (e) =>{
var container = document.querySelector("#first form");
if(!container.contains(e.target) && !document.getElementById("search-toggle").contains(e.target) && !document.querySelector("nav").contains(e.target)){
slideUp(document.querySelector("#first form") , 100, searchBack());
}}

function searchBack(){
document.querySelector("#first form input").value ="";
}












/* 🔥🔥🔥🔥🔥🔥🔥 */
const books =[
{
image: "img/book.png",
title:"Harry Potter and the Philosopher's Stone of Marry Reen",
actualPrice: "219",
offPrice: "399",
rate: "4-5",
availability: "available",
},

{
image: "img/book.png",
title:"Mario is a dummy text to illustrate the testimonials of the this website",
actualPrice: "500",
offPrice: "999",
rate: "3",
availability: "available",
},

{
image: "img/book.png",
title:"Looking for candidates with specific tech skills needed",
actualPrice: "340",
offPrice: "555",
rate: "5",
availability: "available",
},

{
image: "img/book.png",
title:"Phicsit is a community dedicated to helping people learn the tech skills",
actualPrice: "280",
offPrice: "499",
rate: "3",
availability: "available",
},

{
image: "img/book.png",
title:"Harry Potter and the Philosopher's Stone of Marry Reen",
actualPrice: "219",
offPrice: "399",
rate: "4-5",
availability: "available",
},

{
image: "img/book.png",
title:"Mario is a dummy text to illustrate the testimonials of the this website",
actualPrice: "500",
offPrice: "999",
rate: "3",
availability: "available",
},
]
//console.log(books[0].title);
//discount: (parseInt(this.offPrice) - parseInt(this.actualPrice))/this.offPrice*100,



/* appending books */
for(i=0; i<books.length; i++){
const elem = document.createElement("div");
const discount = Math.trunc((parseInt(books[i].offPrice) - parseInt(books[i].actualPrice))/books[i].offPrice*100);

elem.classList.add("card");
elem.innerHTML =`<div class="${i}"><img src="${books[i].image}" class="${books[i].availability}"></div>
		<h1>${books[i].title}</h1>		
		<span><p>-${discount}%</p><p>₹${books[i].actualPrice}</p><p>${books[i].offPrice}</p></span>		
		<main class="review star${books[i].rate}">
		<p>Review :</p>
		<i class="bx bxs-star"></i>
		<i class="bx bxs-star"></i>
		<i class="bx bxs-star"></i>
		<i class="bx bxs-star"></i>
		<i class="bx bxs-star"></i>		
		</main>		
		<span><button class="buy-btn">Buy Now</button>
		<button class="addcart-btn"><i class="bx bx-cart"></i>Add to cart</button></span>`;
document.getElementsByClassName("row")[0].appendChild(elem);
}






/* cart opening and closing */
document.getElementById("cart-open").onclick = () =>{
document.body.style.overflowY ="hidden";
slideDown(document.querySelector("#cart-box") , 400, removeCart);
}
document.getElementById("cart-close").onclick = () =>{
document.body.style.overflowY ="auto";
slideUp(document.querySelector("#cart-box") , 400);
}













