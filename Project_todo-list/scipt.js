/**
 * Todo List
 * 'new' - Add a Todo
 * 'list' - List all todo
 * 'delete' - remove specific Todo using splice method
 * 'quit' - quit App 
 */
let todo = prompt('Hi!, Please add a new task');
let storage = [];

while (todo) {
    if (todo === 'quit' || todo === 'q') {
        alert('See You later chief');
        break;
    }
    storage.push(todo);
    todo = prompt(`You added ${todo} to your task \n Please enter new task`);
    if (todo === 'list') {
        console.log(storage);
        prompt(`Your task are: ${storage}`);
        todo = prompt('enter new task');
    }
    if (todo === 'delete') {
        storage.pop();
        todo = prompt('enter new task');
    }

}

