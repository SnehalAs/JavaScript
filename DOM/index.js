//document.getElementById("heading").textContent="Snehu Technologies";

let headingEl=document.getElementById("heading");


function onAfterChangeHeading(){

    headingEl.textContent="Snehu Technology";

    //console.log("Button function is running smoothly.....");
    headingEl.style.color="teal";
    headingEl.style.backgroundColor="pink";
    headingEl.style.textDecoration="line-through";
}
function onBeforeChangeHeading(){

    headingEl.textContent="Javascript DOM";

    //console.log("Button function is running smoothly.....");
    headingEl.style.color="black";
    headingEl.style.backgroundColor="transparent";
    headingEl.style.textDecoration="none";
}