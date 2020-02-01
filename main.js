let todoList  = {
    todos: [],
    displayTodos: function () {
        if(this.todos.length === 0) {
            console.log('You have nothing planned')
        } else {
            console.log('My todos: ');
            for (i = 0; i< this.todos.length; i++) {
                if(this.todos.complete === true) {
                    console.log('(X)', this.todos[i].todoText)
                } else {
                    console.log('( )', this.todos[i].todoText)
                }
            }
        }
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            complete: false
        });
        this.displayTodos();
    },
    changeTodos:function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos()
    },
    toggleAll: function(){
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for(let i = 0; i< this.todos.length; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }        
        }
        if(completedTodos === totalTodos){
            for(let j = 0; j<this.todos.length; j++){
                this.todos[j].completed = false;
            }
        } else {
            for(let k = 0; k<this.todos.length; k++){
                this.todos[k].completed = true;
            }
        }
        this.displayTodos();
    }
};

/*todoList.displayTodos();
todoList.addTodo('eat dinner');
todoList.addTodo('play a game');
//todoList.toggleCompleted(0,1);
todoList.toggleAll();*/

/*const displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('onclick', function () {
    todoList.displayTodos();
    //console.log('click')
});*/

document.getElementById('displayTodosButton').addEventListener("click", function(){
    document.getElementById('demo').innerHTML = "Hello World";
  });