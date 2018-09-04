// Refactoring - the process of restructuring existing code wihtout changing its external behavior 
// Removed IDs; replaced with "onclick" attribute 
// Added user interface for the four methods 

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

//Grouped methods on 'handlers' object; enables user input  
var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
	}, 
	addTodo: function() {
	  var addTodoTextInput = document.getElementById("addTodoTextInput"); //accesses the ID in the DOM
	  todoList.addTodo(addTodoTextInput.value); //runs the "addTodo" method & takes the "addTodoTextInout.value" arguement
	  addTodoTextInput.value = ""; //resets text input to nothing
	}, 
	changeTodo: function() {
	  var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
	  var changeTodoTextInput = document.getElementById("changeTodoTextInput");
	  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
	  changeTodoPositionInput.valueAsNumber = "";
	  changeTodoTextInput.value = "";
	},
	deleteTodo: function() {
	  var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
	  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
	  deleteTodoPositionInput.valueAsNumber = "";
	}, 
	// For toggling an individual todo; runs the "toggleCompleted" method 
	toggleTodo: function() {
	  var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
	  todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
	  toggleTodoPositionInput.valueAsNumber = "";
	}
};
