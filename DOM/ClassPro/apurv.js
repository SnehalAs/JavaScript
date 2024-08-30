let headingEl= document.getElementById("heading");
let counterValueEl = document.getElementById("counter-value");

let counter = 0;

function updateCounter() {
   headingEl.textContent = counter;
   if (counter > 0) {
      counterValueEl.style.color = 'green';
   } else if (counter < 0) {
      counterValueEl.style.color = 'red';
   } else {
      counterValueEl.style.color = 'Aqua';
   }
}
updateCounter();

function onDecCounter(){
   counter = counter - 1 ;

   console.log(counter);
   
   headingEl.textContent = counter;
   updateCounter();
}

function  onIncCounter(){

   counter = counter + 1 ;

   console.log(counter);

   headingEl.textContent = counter;
   updateCounter();
}


