  // JS Promises

//   alert("first alert");

//   setTimeout(()=>{
//     alert("second alert");
//   },1000);


//   alert("Third alert");

// Asynchronous Execution

// let api= "https://apis.ccbp.in/jokes/random";

// let fetchRequest = fetch (api);

// console.log(fetchRequest);


// let api= "https://apis.ccbp.in/jokes/random";

// console.log("First Statement");

// fetch(api)
//     .then(  (response)=> {
//         console.log("Second Statement");
//     })
//     .catch ((error)=>{
//         console.log("Second Statement");
//     })

//     console.log("Last Statement");

// let api= "https://apis.ccbp.in/jokes/random";

// console.log("First Statement");

// fetch(api)
//     .then( (response)=> {
//        return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch ((error)=>{
//         console.log(error);
//     })

// let api= "https://apis.ccbp.in/jokes/random";

// console.log("First Statement");

// function onSaveTodo(){
// fetch(api)
//     .then( (response)=> {
//        return response.json();
//     })
//     .then((data)=>{
//         console.log(data.value);
//         document.getElementById("randomJokes").textContent = data.value; 
//     })
//     .catch ((error)=>{
//         console.log(error);
//     })

// }

//Async /Await

// let api= "https://apis.ccbp.in/jokes/random";

// console.log("First Statement");

// async function onSaveTodo(){
//     let response = await fetch(api);
//     let data = await response.json();
//     console.log(data);

// }

//Try catch uses
let api= "https://apis.ccbp.in/jokes/random";

console.log("First Statement");
async function onSaveTodo(){
try {

    let response = await fetch(api);
    let data = await response.json();
    console.log(data);

}
 catch (error) {
    console.log(error);
}

}