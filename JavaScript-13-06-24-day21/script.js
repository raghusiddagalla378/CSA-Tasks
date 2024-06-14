const input = document.querySelector('.form-control');
const addTodobtn = document.querySelector('.btn');
const todosList = document.querySelector('.todos');

let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

const showTodos = () => {
    todosList.innerHTML = '';
    allTodos.forEach((myTodo) => {
        const { todo, isCompleted, id } = myTodo;
        const html = `
        <div class="border border-3 mt-2 p-3">
            <h1 class="text-primary rounded p-2 mt-2">${todo}</h1>
            <input type="checkbox" ${isCompleted ? 'checked' : ''} />
            <button class="btn btn-warning">Update</button>
            <button class="btn btn-danger">Delete</button>
        </div>
        `;
        todosList.innerHTML += html;
    });
};

const toggleTodo = (id) => {
    allTodos = allTodos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, isCompleted: !todo.isCompleted };
        } else {
            return todo;
        }
    });
    localStorage.setItem('todos', JSON.stringify(allTodos));
    showTodos();
};

const deleteTodo = (id) => {
    allTodos = allTodos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    showTodos();
};

addTodobtn.addEventListener('click', () => {
    const userInput = input.value;
    if (!userInput) {
        return alert('Please enter the valid todo data...');
    } else {
        allTodos.push({
            todo: userInput,
            isCompleted: false,
            id: Date.now()
        });

        input.value = '';
        localStorage.setItem('todos', JSON.stringify(allTodos));
        showTodos();
    }
});

todosList.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
        const todoItem = event.target.parentElement.querySelector('.text-primary');
        const todoId = allTodos.find((todo) => todo.todo === todoItem.innerText).id;
        toggleTodo(todoId);
    } else if (event.target.classList.contains('btn-danger')) {
        const todoItem = event.target.parentElement.querySelector('.text-primary');
        const todoId = allTodos.find((todo) => todo.todo === todoItem.innerText).id;
        deleteTodo(todoId);
    } else if (event.target.classList.contains('btn-warning')) {
        // Add functionality to update todo here if needed
        const todoItem = event.target.parentElement.querySelector('.text-primary');
        const todoId = allTodos.find((todo) => todo.todo === todoItem.innerText).id;
        const updatedTodo = prompt('Update Todo:', todoItem.innerText);
        if (updatedTodo) {
            allTodos = allTodos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, todo: updatedTodo };
                } else {
                    return todo;
                }
            });
            localStorage.setItem('todos', JSON.stringify(allTodos));
            showTodos();
        }
    }
});

todosList.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const todoItem = event.target.parentElement.querySelector('.text-primary');
        const todoId = allTodos.find((todo) => todo.todo === todoItem.innerText).id;
        toggleTodo(todoId);
    }
});

window.onload=showTodos;
