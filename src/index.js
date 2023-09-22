import { loadProject } from './storage.js';
import { startListener, newCard, newTask } from './displayController.js';

function loadTodoList (projectList, projectIndex) {
  const todo = projectList[projectIndex]["todo-list"];

  for (let i = 0; i < todo.length; i++) {
    console.log("Card:", todo[i].title);
      let taskContainer = newCard(todo[i].title);
    for (let j = 0; j < todo[i].tasks.length; j++) {
      console.log("Task:", todo[i].tasks[j].task)
      newTask(taskContainer, todo[i].tasks[j].task)
    }
  }
}

const projectList = loadProject();
loadTodoList(projectList, 0);

let taskContainer = newCard('Check it out 1', 'pink');
newTask(taskContainer, 'My empty task goes here', 'pink');
newTask(taskContainer, 'My empty task goes here', 'pink');
newTask(taskContainer, 'My empty task goes here', 'pink');
newTask(taskContainer, 'My empty task goes here', 'pink');
newTask(taskContainer, 'My empty task goes here', 'pink');

taskContainer = newCard('Check it out 2', 'lightblue');
newTask(taskContainer, 'My empty task goes here', 'lightblue');
newTask(taskContainer, 'My empty task goes here', 'lightblue');
newTask(taskContainer, 'My empty task goes here', 'lightblue');
newTask(taskContainer, 'My empty task goes here', 'lightblue');

// startListener();