
// How to listen events in javascript.

let defuserBtnEl = document.getElementById("defuserBtn");
let defuserEl =document.getElementById("defuser");

// First method to provide events on button.

defuserBtnEl.onclick =function(){
    console.log("Function Running...");

}

//second method to provide event on button.

function onclickBtn(){
    console.log("Add event listner method running...");
}

defuserBtnEl.addEventListener("click",onclickBtn);


// How to listen events from input element.
function onChangeUserIn(event){
    if(event.key=== "Enter" && event.target.value==="defuse"){
        console.log("You save the City");
    }
    else{
        console.log("Boom!!!")
    }
    
}

defuserEl.addEventListener("keydown",onChangeUserIn)


