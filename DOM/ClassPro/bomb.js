//------------------CallBacks------------------------->

// let arr1 = [8,2,3,4,5,6];

// let newArr = arr1.findIndex((element)=> element % 2 !== 0)

// console.log(newArr);

//==========================================================================
//--------------Timers----------->
//setinterval();

//setTimeout();

//syntax : setTimeout ( ()=>{}, 1000 );

//syntax : setInterval ( ()=>{}, 1000 );

//setTimeout(()=>console.log("timeout executed"),2000); //only executes once.

let myImageEl = document.getElementById("myImage");
let defuserEl = document.getElementById("defuser");
let counterEl = document.getElementById("counter");
let counter = 10;

let intervalId = setInterval(() => {
  counter = counter - 1;
  counterEl.textContent = counter;
}, 1000);

//console.log(intervalId);
function stop() {
 // clearInterval(intervalId);
 let passcodeVal = defuserEl.value;

 if(passcodeVal === "defuse"){
    clearInterval(intervalId);
    myImageEl.src="https://th.bing.com/th/id/OIP.MrBHCE5TUPZ8Q9DXLuNlfAAAAA?w=300&h=224&rs=1&pid=ImgDetMain"
 }
}
