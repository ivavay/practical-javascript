var todoList = {
  todos: [], 
  displayTodos: function() {
    console.log("My Todos", this.todos);
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

/* bang operator: 
!false 
> true

ex.) 
todo.completed = !todo.completed;
-- > flips to the opposite of what it was before


By creating "var todo", it saves you from writing "this.todos[position]" 
over and over again. 
*/

