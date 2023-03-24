const b2 ={
  text: "Hello I am Jyoti Bhasin and I Impressive Thinking about the latest",
  img: "../img/jyoti.jpg", 
  link: "b2.html"	
};
const b3 ={
  text: "Hello I am Deependra Gaur, i am founder of PHICSIT",
  img: "../img/deependraGaur.jpeg", 
  link: "b3.html"	
};
const b4 ={
  text: "Hello I am PHICSIT and I Impressive Thinking about the latest",
  img: "../img/logo.jpg", 
  link: "b2.html"	
};
const concateSearch = [b2,b3,b4];








let addedDivs = []; // Keep track of added div elements
function updateSearchResults(){
  let userInput = document.getElementById("search-int").value.toLowerCase().trim().replace(/\s{2,}/g, ' ');
  let box = document.getElementById("search-result");
  let matchedObjects = [];
  let matchedDivs = [];

  // Check if the user input is empty
  if (userInput === "") {
    // Remove all added div elements and reset the search result box style
    addedDivs.forEach(div => div.remove());
    addedDivs = [];
    document.querySelector("#first-main-head form").style.borderRadius ="10px";
document.querySelector("#first-main-head form span input").style.borderRadius ="0 0 10px 10px";
document.querySelector("#first-main-head form span button").style.borderRadius ="0 10px 10px 0";
document.querySelector("#first-main-head form #search-result").style.display ="none";
document.body.classList.remove("search-overlay");
    return;
  }

  // Check all added div elements and remove if unmatched
  addedDivs.forEach((div) => {
    let text = div.querySelector('h1').getAttribute('text').toLowerCase().trim();
    if (!text.includes(userInput)) {
      div.remove();
    }else{
      matchedDivs.push(div);
    }
  });

  // Add new div elements for matched objects
  concateSearch.forEach((obj) => {
    let text = obj.text.toLowerCase().trim().replace(/\s{2,}/g, ' ');

    if (text.includes(userInput)) {
      let matchingDiv = matchedDivs.find((div) => {
        return div.querySelector('h1').getAttribute('text') === obj.text;
      });
      if (!matchingDiv) {
        let div = document.createElement("div");
        div.classList.add("search-res-div");
        div.onclick = () =>{window.location = obj.link};
        div.innerHTML = `<img src="${obj.img}">
                          <h1 text="${obj.text}">${obj.text}<i class="bx bx-link-external"></i></h1>`;
        box.appendChild(div);
        matchedDivs.push(div);
        addedDivs.push(div);
        document.body.classList.add("search-overlay");
        document.querySelector("#first-main-head form").style.borderRadius ="10px 10px 0 0";
document.querySelector("#first-main-head form span input").style.borderRadius ="10px 0 0 0";
document.querySelector("#first-main-head form span button").style.borderRadius ="0 10px 0 0";
document.querySelector("#first-main-head form #search-result").style.display ="flex";
      }
    }
  });

  // Update array of added div elements
  addedDivs = matchedDivs;
}


// Define a debounce function to delay the function call
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

document.getElementById("search-int").addEventListener("input", debounce(updateSearchResults, 50));
