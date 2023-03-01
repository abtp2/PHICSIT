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
document.getElementById("first-card-logo").style.visibility ="visible";
document.getElementById("first-card-logo").classList.add("animate__rollIn");

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

if(value > -100/100){
anime1.style.scale =`${value}%`; 
anime2.style.scale =`${value}%`;
}


/* for back to top button */
if(val > 150){
document.getElementById("back-to-top").style.display ="flex";	
}
else{
document.getElementById("back-to-top").style.display ="none";	
}
};












/* codes */

var editor = ace.edit("code-box"); 
editor.setTheme("ace/theme/github_dark");
editor.setReadOnly(true);
editor.renderer.setShowGutter(false);
editor.getSession().setMode("ace/mode/c_cpp");
editor.setValue(`#include <stdio.h>
int main() {  
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);  
    
    // %d displays the integer value of a character
    // %c displays the actual character
    printf("ASCII value of %c = %d", c, c);
    
    return 0;
}` ,1);				




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
editor.setValue(`num = float(input("Enter a number: "))
if num > 0:
   print("Positive number")
elif num == 0:
   print("Zero")
else:
   print("Negative number")
` ,1);
}

else if(this.value ==="c++"){
editor.getSession().setMode("ace/mode/c_cpp");
editor.setValue(`#include <iostream>
using namespace std; 
int main() { 
float a, b, c; 
cin >> a >> b >> c; 
if(a >= b && a >= c) 
  cout << "Largest number: " << a; 
if(b >= a && b >= c) 
  cout << "Largest number: " << b; 
if(c >= a && c >= b) 
  cout << "Largest number: " << c; 
return 0; 
}` ,1);				
}

else if(this.value ==="c#"){
editor.getSession().setMode("ace/mode/csharp");				
editor.setValue(`using System; 
namespace HelloWorld{ 
class Program { 
static void Main(string[] args) { 
Console.WriteLine("Hello World!"); 
} 
} 
}` ,1);
}

else if(this.value ==="c"){
editor.getSession().setMode("ace/mode/c_cpp");				
editor.setValue(`#include <stdio.h>
int main() {  
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);  
    
    // %d displays the integer value of a character
    // %c displays the actual character
    printf("ASCII value of %c = %d", c, c);
    
    return 0;
}
` ,1);
}

else if(this.value ==="java"){
editor.getSession().setMode("ace/mode/java");				
editor.setValue(`public class QuotientRemainder { 
public static void main(String[] args) { 
int dividend = 25, divisor = 4; 
int quotient = dividend / divisor; 
int remainder = dividend % divisor; System.out.println("Quotient = " + quotient); System.out.println("Remainder = " + remainder); 
} 
}` ,1);
}

else if(this.value ==="swift"){
editor.getSession().setMode("ace/mode/swift");				
editor.setValue(`var capitalCity = ["Nepal": "Kathmandu", "England": "London"]
print("Initial Dictionary: ",capitalCity)

capitalCity["Japan"] = "Tokyo"

print("Updated Dictionary: ",capitalCity)
print(capitalCity["Japan"])` ,1);
}

else if(this.value ==="ruby"){
editor.getSession().setMode("ace/mode/ruby");				
editor.setValue(`# Ruby program to demonstrate 
# the nested if statement

print "Enter number1: ";
num1 = gets.chomp.to_i;  

print "Enter number2: ";
num2 = gets.chomp.to_i;  

print "Enter number3: ";
num3 = gets.chomp.to_i;  

if(num1>num2)
    if(num1>num3)
        large=num1;
    else
        large=num3;
    end
elsif(num2>num3)
    large=num2;
else
    large=num3;
end

print "Largest number is: ",large;
` ,1);
}

else if(this.value ==="php"){
editor.getSession().setMode("ace/mode/php");				
editor.setValue(`<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
}
?>` ,1);
}

else if(this.value ==="matlab"){
editor.getSession().setMode("ace/mode/MATLAB");				
editor.setValue(`% Define time vector
t = 0:0.1:10;

% Calculate sine wave
y = sin(t);

% Generate plot
plot(t, y);

% Label axes and add title
xlabel('Time (s)');
ylabel('Amplitude');
title('Sine Wave');
` ,1);
}

else if(this.value ==="sql"){
editor.getSession().setMode("ace/mode/SQL");				
editor.setValue(`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  age INT
);

INSERT INTO users (id, name, email, age)
VALUES (1, 'John Doe', 'johndoe@example.com', 30),
       (2, 'Jane Smith', 'janesmith@example.com', 25),
       (3, 'Bob Johnson', 'bobjohnson@example.com', 40);
` ,1);
}

else if(this.value ==="kotlin"){
editor.getSession().setMode("ace/mode/kotlin");				
editor.setValue(`fun main() {
    print("Enter a number: ")
    val num = readLine()!!.toInt()

    if (num % 2 == 0) {
        println("$num is even.")
    } else {
        println("$num is odd.")
    }
}
` ,1);
}

else if(this.value ==="typescript"){
editor.getSession().setMode("ace/mode/typescript");				
let myTypeScriptCode = `class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getDetails(): string {
      return \`\${this.name} is \${this.age} years old.\`;
    }
  }

  let john = new Person("John", 30);
  console.log(john.getDetails());
`;
editor.setValue(myTypeScriptCode ,1);
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











/* elastic email */
document.getElementById("copy-date").innerHTML = new Date().getFullYear();

function newsMail(){
event.preventDefault();
  var params = {
    email_id: document.getElementById("news-email").value,
  };
document.getElementById("news-submit").innerHTML =`<i class="bx bx-spin bx-loader-circle"></i>`; 
document.querySelector("#foot-news form button").style.padding ="6px 0";


  const serviceID = "service_jogdt1q";
  const templateID = "template_ber1dwg";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        console.log(res);
 document.getElementById("news-submit").innerHTML =`<i class="bx bx-check-circle"></i>`; 
 document.querySelector("#foot-news form button").style.padding ="6px 0";
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
document.querySelector("#foot-news form button").style.padding ="10px 0";
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
document.querySelector("#foot-news form button").style.padding ="10px 0";
});	 

document.getElementById("news-submit").innerHTML =`<i class="bx bx-error-circle"></i>`;			
document.querySelector("#foot-news form button").style.padding ="6px 0";





/*  
setTimeout(function(){ 	document.getElementById("news-submit").innerHTML =`<i class="bx bx-error-circle"></i>`;			
document.querySelector("#foot-news form button").style.padding ="6px 0";
 }, 1500);
 
 setTimeout(function(){
document.getElementById("news-submit").innerHTML ="Go";	}, 3000);				
document.querySelector("#foot-news form button").style.padding ="10px 0"; */
}











function goHide(x){
document.querySelector(x).style.top = "-200%";				
document.getElementById("nav-closer").click();
}
function goShow(x){
document.querySelector(x).style.top = "0px";	document.getElementById("nav-closer").click();		
}