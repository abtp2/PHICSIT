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
initSlider();
setBuyBtn();

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




 

var cartInner = localStorage.getItem("cartData");
if(document.getElementsByClassName("row")[1]){
document.getElementsByClassName("row")[1].innerHTML = cartInner;
toCheckNull();
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
showCards();
slideToggle(document.querySelector("#first form") , 100, searchBack());				
document.querySelector("#first form input").focus();
document.querySelector("#first form input").click();
}

if(window.matchMedia("(max-width: 700px)").matches){
document.onmouseup = (e) =>{
var container = document.querySelector("#first form");
if(!container.contains(e.target) && !document.getElementById("search-toggle").contains(e.target) && !document.querySelector("nav").contains(e.target) && !document.getElementsByClassName("row")[0].contains(e.target)){
initSlider();
showCards();
slideUp(document.querySelector("#first form") , 100, searchBack());
}}
} // if condition 


function searchBack(){
showCards();
document.querySelector("#first form input").value ="";
}












/* 🔥🔥🔥🔥🔥🔥🔥 */
const books =[
{
image: ["img/ex.png"],
title:"Steve Jobs: The Exclusive Biography",
actualPrice: "599",
offPrice: "699",
rate: "5",
availability: "available",
type: "hard",
},

{
image: ["img/dogla-1.png", "img/dogla-2.png", "img/dogla-3.png"],
title:"Doglapan: The Hard Truth about Life and Start-Ups",
actualPrice: "362",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/elon-1.png", "img/elon-2.png"],
title:"Elon Musk",
actualPrice: "394",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/atomic-1.png", "img/atomic-2.png"],
title:"Atomic Habits: The life-changing million copy ~ James Clear",
actualPrice: "436",
offPrice: "500",
rate: "4-5",
availability: "available",
type: "hard",
},

{
image: ["img/lean-1.png", "img/lean-2.png"],
title:"The Lean Startup: How Constant Innovation creates Radically Successful Businesses Eric",
actualPrice: "646",
offPrice: "799",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/subtle-1.png"],
title:"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
actualPrice: "333",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/fate-1-1.png", "img/fate-1-2.png"],
title:"The Earesha's Fate : Part-1",
actualPrice: "333",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/fate-2-1.png", "img/fate-2-2.png"],
title:"The Earesha's Fate : Part-2",
actualPrice: "333",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/fate-3-1.png", "img/fate-3-2.png"],
title:"The Earesha's Fate : Part-3",
actualPrice: "333",
offPrice: "499",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/hard-1.png", "img/hard-2.png"],
title:"The Hard Thing about Hard Thing: Building a Business When There are No Easy Awswers",
actualPrice: "505",
offPrice: "599",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/rich-1.png"],
title:"Rich Dad Poor Dad ~ Robert Kiyodaki",
actualPrice: "375",
offPrice: "450",
rate: "4-5",
availability: "available",
type: "hard",
},

{
image: ["img/zero-1.png", "img/zero-2.png"],
title:"Zero To One",
actualPrice: "375",
offPrice: "450",
rate: "4-5",
availability: "available",
type: "ebook",
},

{
image: ["img/book.png", "img/book.png", "img/book.png"],
title:"Sapiens: A Brief History of Humankind",
actualPrice: "309",
offPrice: "399",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/book.png", "img/book.png", "img/book.png"],
title:"EINSTEIN: His Life and Universe",
actualPrice: "445",
offPrice: "599",
rate: "3",
availability: "available",
type: "hard",
},

{
image: ["img/book.png", "img/book.png", "img/book.png"],
title:"Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc",
actualPrice: "269",
offPrice: "399",
rate: "4-5",
availability: "available",
type: "hard",
},

{
image: ["img/book.png", "img/book.png", "img/book.png"],
title:"The Psychology of Money",
actualPrice: "185",
offPrice: "205",
rate: "3",
availability: "available",
type: "hard",
},
]
//console.log(books[0].title);
//discount: (parseInt(this.offPrice) - parseInt(this.actualPrice))/this.offPrice*100,











/* appending books */
for(i=0; i<books.length; i++){
const elem = document.createElement("div");
const discount = Math.trunc((parseInt(books[i].offPrice) - parseInt(books[i].actualPrice))/books[i].offPrice*100);
// books Slider 

var imgLen = books[i].image.length;
var imgSrc;
if(imgLen == 1){
imgSrc = `<img src="${books[i].image[0]}" class="carousel-cell">`;
}
if(imgLen == 2){
imgSrc = `<img src="${books[i].image[0]}" class="carousel-cell">
				<img src="${books[i].image[1]}" class="carousel-cell">`;
}
if(imgLen == 3){
imgSrc = `<img src="${books[i].image[0]}" class="carousel-cell">
				<img src="${books[i].image[1]}" class="carousel-cell">
				<img src="${books[i].image[2]}" class="carousel-cell">`;	
}



elem.classList.add("card");
elem.innerHTML =`<div class="${i} main-carousel">
				${imgSrc}
				</div>
		<h1 class="${books[i].type}">${books[i].title}</h1>		
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

/*  
document.querySelectorAll(".card").forEach(elem =>{
elem.onclick=(x)=>{event.target.closest(".main-carousel").requestFullscreen();}
}); */







/* filter books based on search input */
document.getElementById("search-int").oninput=(e)=>{
	const query = e.target.value.toLowerCase().trim().replace(/\s{2,}/g, ' ');
	for (let i = 0; i < books.length; i++) {
		const title = books[i].title.toLowerCase();
		const elem = document.getElementsByClassName(`${i}`)[0].closest(".card");
		if(e.target.value ===""){
	 	//elem.style.display = "block";
	 	h_w_full(elem);
		}
		else{
		   if (title.includes(query)) {
			 //elem.style.display = "block";
			 h_w_full(elem);
			 }else{
			 //elem.style.display = "none";
			 h_w_0(elem);
			 document.querySelector("#second h4").style.display ="block";}
		}
		
 }//for loop ended
 
 
/* Show/hide 'No matching books' message */
const matchingCards = document.getElementsByClassName("row")[0].querySelectorAll('.card.matched');
if(matchingCards.length === 0){
document.querySelector("#second h4").style.display = "block";
} else{
document.querySelector("#second h4").style.display = "none";} 
}//oninput function ended



/* initialize Slider */
function initSlider(){
var imageSlider = document.querySelectorAll('.main-carousel');
imageSlider.forEach(elem => {
var flkty = new Flickity( elem, { 
cellAlign: 'center', 
wrapAround: true,
});
});
checkSlider();
var imageSlider = document.querySelectorAll('.banner');
imageSlider.forEach(elem => {
var flkty = new Flickity( elem, { 
cellAlign: 'center', 
wrapAround: true,
autoPlay: 2500,
});
});
}






/* function to display all the cards */
function showCards(){
var cards = document.getElementsByClassName("row")[0].querySelectorAll(".card");
cards.forEach(card => {
//card.style.display ="block";
h_w_full(card);
});
document.querySelector("#second h4").style.display = "none";
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





/* buy btn set opening and closing */
function setBuyBtn(){
document.getElementsByClassName("row")[0].querySelectorAll(".buy-btn").forEach(button => {
button.onclick = () => {
buy();
}
});
document.getElementsByClassName("row")[1].querySelectorAll(".buy-btn").forEach(button => {
button.onclick = () => {
buy();
} 
});
} // function ended





/* buy box closing */
document.getElementById("buy-close").onclick = () =>{
document.body.style.overflowY ="auto";
slideUp(document.querySelector("#buy-box") , 400);
resetBuy();
}






/* buy function  */
function buy(){
document.body.style.overflowY ="hidden";
slideDown(document.querySelector("#buy-box") , 400);
document.getElementById("buy-box").scrollTo(0,0);


document.querySelector("#buy-head div img").src = event.currentTarget.closest(".card").querySelector("img:nth-of-type(1)").getAttribute("src");
for(i=1;i<=event.currentTarget.closest(".card").querySelectorAll("img").length; i++){
document.querySelector(`#buy-head span img:nth-of-type(${i})`).style.display ="flex";

document.querySelector(`#buy-head span img:nth-of-type(${i})`).src = event.currentTarget.closest(".card").querySelector(`img:nth-of-type(${i})`).getAttribute("src");
}






// for buy carousel 
/*
document.querySelector("#buy-head div img").src = event.currentTarget.closest(".card").querySelector("img:nth-of-type(1)").getAttribute("src");
document.querySelector("#buy-head span img:nth-of-type(1)").src = event.currentTarget.closest(".card").querySelector("img:nth-of-type(1)").getAttribute("src");
document.querySelector("#buy-head span img:nth-of-type(2)").src = event.currentTarget.closest(".card").querySelector("img:nth-of-type(2)").getAttribute("src");
document.querySelector("#buy-head span img:nth-of-type(3)").src = event.currentTarget.closest(".card").querySelector("img:nth-of-type(3)").getAttribute("src");
 */




// for h1
document.querySelector("#buy-body h1").innerHTML = event.currentTarget.closest(".card").querySelector("h1").innerHTML;
// for discount 
document.querySelector("#buy-body span p:nth-of-type(1)").innerHTML = event.currentTarget.closest(".card").querySelector("span p:nth-of-type(1)").innerHTML;
// for actualPrice
document.querySelector("#buy-body span p:nth-of-type(2)").innerHTML = event.currentTarget.closest(".card").querySelector("span p:nth-of-type(2)").innerHTML;
// for offPrice 
document.querySelector("#buy-body span p:nth-of-type(3)").innerHTML = event.currentTarget.closest(".card").querySelector("span p:nth-of-type(3)").innerHTML;
// for rate 
document.querySelector("#buy-body main").className = event.currentTarget.closest(".card").querySelector("main").getAttribute("class");
// for type
if(event.currentTarget.closest(".card").querySelector("h1").classList.contains("ebook")){
document.querySelector("#buy-body label").innerHTML = "Type : E-book";
document.querySelector("#mode-span").style.display ="none";
document.querySelector("#address").style.display ="none";
}else{
document.querySelector("#buy-body label").innerHTML = "Type : Hard Cover";
document.querySelector("#mode-span").style.display ="flex";
document.querySelector("#address").style.display ="flex";
}}

function cgImg(x){
document.querySelector("#buy-head div img").src = x;
document.querySelectorAll("#buy-head span img").forEach(i => {
i.style.opacity = 0.5;
});
event.currentTarget.closest("img").style.opacity = 1;
}





function checkSlider(){
document.getElementsByClassName("row")[0].querySelectorAll(".card").forEach(card => {
if(card.querySelector("h1").classList.contains("ebook")){
//card.querySelector(".flickity-page-dots").style.display ="none";
//card.querySelector("div").style.paddingBottom ="0";
}
});
}



/* to reset buy box */
function resetBuy(){
document.querySelectorAll("#buy-head span img").forEach(img => {
img.style.display ="none";		
});
document.querySelector("#buy-head span img:nth-of-type(1)").click();
document.querySelector("#buy-box form").reset();
}





