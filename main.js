let todoList  = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            complete: false
        });
    },
    changeTodos:function (position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.complete = !todo.complete;
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
    }
};

let handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos()
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos()
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos()
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos()
    },
    toggleCompleted: function () {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos()
    }
};
const view = {
    displayTodos: function () {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (let i = 0; i<todoList.todos.length; i++){
            let todoLi = document.createElement('li');
            let todo = todoList.todos[i];
            let todoWithCompletian = '';
            if (todo.complete === true) {
                todoWithCompletian = '(X) ' + todo.todoText;
            } else {
                todoWithCompletian = '( ) ' + todo.todoText;
            }
            todoLi.id = i;
            todoLi.textContent = todoWithCompletian;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function () {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;   
    },
    setUpeEventListeners: function () {
      let todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event) {
        let elementClicked = event.target;
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        })
    }
};

view.setUpeEventListeners();