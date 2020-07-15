var todos = ["Fuck Bitches"];


while(input !== "quit"){
    if(input === "list"){
      listTodos();
        }
        else if(input === "new") {
        addTodo();   
        } else if(input === "delete")
        {
        deleteTodo();
        }
      
        var input = prompt("what would you like to do?") 
} 
console.log ("you quit the app")

function listTodos(){
    console.log("***********")
        todos.forEach(function(todo, i)
       {
           console.log(i + ": " + todo);
       });
       console.log("***********")
        console.log(todos)
}
function addTodo(){
     // ask for new todo
     var newtodo =  prompt("What would you like to add?")
     // add to new todos array
     todos.push(newtodo);
     console.log("added todo")
}
function deleteTodo() {
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete")
    // delete the todo    
    //splice()
    todos.splice(index,1)
    console.log("deleted todo");
}