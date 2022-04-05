/**
 * Todo List
 * 'new' - Add a Todo
 * 'list' - List all todo
 * 'delete' - remove specific Todo using splice method
 * 'quit' - quit App 
 */

/**
 * ==============
 * MY VERSION
 * ==============
 */
// let todo = prompt('Hi!, Please add a new task');
// const storage = [];

// while (todo) {
//     if (todo === 'quit' && todo === 'q') {
//         alert('See You later chief');
//         break;
//     }
//     storage.push(todo);
//     todo = prompt(`You added ${todo} to your task \n Please enter new task`);
//     if (todo === 'list') {
//         console.log(storage);
//         prompt(`Your task are: ${storage}`);
//         todo = prompt('enter new task');
//     }
//     if (todo === 'delete') {
//         storage.pop();
//         todo = prompt('enter new task');
//     }

// }

/**
 * ==============
 * TUTORS VERSION
 * ==============
 */
let input = prompt('What would you like to do ?');
const storage = ['Collect kitchen eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('* =====================');
        for (let i = 1; i < storage.length + 1; i++) {
            console.log(`${i}: ${storage[i - 1]}`);
        }
        console.log('* =====================');
    } else if (input === 'new') {
        const newTodo = prompt("What is the new todo?");
        storage.push(newTodo);
        console.log(`${newTodo} added to the List`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, Enter an index to delete')); // Using splice()
        if (!Number.isNaN(index)) {
            const deletedTodo = storage.splice(index, 1);
            console.log(`Ok, deleted ${deletedTodo[0]}`);
        } else {
            console.log('Unknown Number')
        }
    }
    input = prompt('What would you like to do ?');
}
console.log('Ok Quit the app!!!');
