var todoList = {
  todos: [], 
  displayTodos: function() {
    if (this.todos.length === 0){
      console.log("Your to-do list is empty!");
      } else {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++){
          if (this.todos[i].completed === true){
          console.log("(x)",this.todos[i].todoText);
          } else {
          console.log("()",this.todos[i].todoText);
        }
      }
    }
  }, 
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }, 
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  }, 
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};



//Defined two variables and used method "getElementById" to gain access to the ID in index.html
var displayTodosButton = document.getElementById("displayTodosButton");
console.log(displayTodosButton);
var toggleAllButton = document.getElementById("toggleAllButton");
console.log(toggleAllButton);

//Not sure if "the console.log" is necessary

//Added method "addEventListener" which allows a specified method to run when clicked
displayTodosButton.addEventListener("click", function(){
  todoList.displayTodos();
});
toggleAllButton.addEventListener("click", function(){
  todoList.toggleAll();
});