// version 5 - loops of logic 
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
  }
};

/* Used if/else to show "Your to-do list is empty!"
  message when there is nothing in the array and run the for loop if there is. 
  Inside the for loop, there is another if/else that uses the .completed property to refer to the
  toggleCompleted method.
*/
