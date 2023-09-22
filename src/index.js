import { loadProject } from './storage.js';
import { startListener, newCard, newTask } from './displayController.js';

// const todoList = loadProject();
// console.log(todoList);

// startListener();

let taskContainer = newCard('Check it out 1', 'pink');
newTask(taskContainer, 'My empty task goes here', 'blue');

taskContainer = newCard('Check it out 2', 'lightblue');
newTask(taskContainer, 'My empty task goes here', 'pink');