
// How to Create element dynamically :

// Syntax : ------> document.createElement("tag name");

//for appending child to parent we use .appendChild();

let rootContainerEl = document.getElementById("rootContainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "Dynamic Heading"
rootContainerEl.appendChild(headingEl);
//console.log(headingEl);