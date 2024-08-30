let rootContainerEl = document.getElementById("rootContainer");
let myInputEl = document.getElementById("myInput");
let errorMsgEl = document.getElementById("errorMsg");
function getTodoFromLocalStorage(){
    let storedTodo = localStorage.getItem("myTodoList");
    
    if(storedTodo === null){
        return [];
    }
    else{
        let parsedTodo = JSON.parse(storedTodo);
         return parsedTodo;
    }
}
let todoList = getTodoFromLocalStorage();
function onSaveTodo(){
    let stringifyTodo = JSON.stringify(todoList);
    localStorage.setItem("myTodoList",stringifyTodo);
}
function onStatusChange(checkId,titleId,todoId){
  let checkboxEl = document.getElementById(checkId);
  let myTitle = document.getElementById(titleId);
if (checkboxEl.checked === true){
     myTitle.classList.add("checked");
  }
  else{
    myTitle.classList.remove("checked");
  }
let index = todoList.findIndex( (each)=>  each.id === todoId  );
  if(todoList [index].isChecked === true){

    todoList [index].isChecked = false; 
}
 else{
    todoList [index].isChecked = true;
 }
}
function onDeleteTodo(todoId){
    let myTodoEl = document.getElementById(todoId);
    rootContainerEl.removeChild(myTodoEl);
    let index = todoList.findIndex((todo) => "todo" + todo.id === todoId);
    if (index !== -1) {
        todoList.splice(index, 1); 
    }
     onSaveTodo(); 
}
function createAndAppendTodo(todo){
    console.log(todoList);
  let checkboxId = "myCheckbox" + todo.id; 
  let titleId = "myTitle" + todo.id; 
  let todoId = "todo" + todo.id; 
 let todoListEl= document.createElement("li");
  todoListEl.classList.add("todo-list-cont");
  todoListEl.id = todoId;
  rootContainerEl.appendChild(todoListEl);
let myCheckboxEl = document.createElement("input");
  myCheckboxEl.type = "checkbox";
  myCheckboxEl.id = checkboxId;
  if(todo.isChecked === true){
    myCheckboxEl.checked = true;
  }
  myCheckboxEl.onclick = function(){
    onStatusChange(checkboxId,titleId,todo.id);
  }
  todoListEl.appendChild(myCheckboxEl);
let myLabelEl = document.createElement("label");
  myLabelEl.classList.add("todo-label-cont");
  myLabelEl.htmlFor = checkboxId;
  todoListEl.appendChild(myLabelEl);
let titleEl = document.createElement("h5");
  titleEl.textContent = todo.title;
  titleEl.id = titleId;
  if(todo.isChecked === true){
   titleEl.classList.add("checked");
  }
  myLabelEl.appendChild(titleEl);
let buttonEl = document.createElement("button");
  buttonEl.classList.add("my-btn");
  buttonEl.onclick = function(){
    onDeleteTodo(todoId);
  }
  myLabelEl.appendChild(buttonEl);

  let deleteIconEl = document.createElement("i");
  buttonEl.classList.add("fa-solid" ,"fa-trash");
  buttonEl.appendChild(deleteIconEl);
}

function onAddNewTodo(){
 let newTodoTitle = myInputEl.value;
    let uniqueId = Math.ceil(Math.random()*new Date().getTime());
   if(newTodoTitle === ""){
  errorMsgEl.textContent = "Please Enter Valid Input";
  }
  else{

    let newTodo = {
    title : newTodoTitle,
    id : uniqueId,
    isChecked : false
    

    }
todoList.push(newTodo);
createAndAppendTodo(newTodo);
    errorMsgEl.textContent = "";
}
myInputEl.value = "";
}
for(let each of todoList){

    createAndAppendTodo(each);
}