let todoList  = {
    todos: [],
    displayTodos: function () {
        //debugger;
        if(this.todos.length === 0) {
            console.log('You have nothing planned')
        } else {
            console.log('My todos: ');
            for (i = 0; i< this.todos.length; i++) {
                if(this.todos[i].complete === true) {
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
        todo.complete = !todo.complete;
        this.displayTodos()
    },
    toggleAll: function(){
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for(let i = 0; i< this.todos.length; i++){
            if(this.todos[i].complete === true){
                completedTodos++;
            }        
        }
        if(completedTodos === totalTodos){
            for(let j = 0; j<this.todos.length; j++){
                this.todos[j].complete = false;
            }
        } else {
            for(let k = 0; k<this.todos.length; k++){
                this.todos[k].complete = true;
            }
        }
        this.displayTodos();
    }
};

let handlers = {
    displayTodos: function() {
        todoList.displayTodos() 
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput'); 
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function () {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    }
}