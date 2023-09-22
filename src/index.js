import { loadProject, saveProject } from './storage.js';
import { startListener, newCard, newTask, colors } from './displayController.js';

function loadTodoList (projectList, projectIndex) {
  const todo = projectList[projectIndex]["todo-list"];

  for (let i = 0; i < todo.length; i++) {
    let color = colors[todo[i].color];
    let taskContainer = newCard(todo[i].title, color);
    for (let j = 0; j < todo[i].tasks.length; j++) {
      newTask(taskContainer, todo[i].tasks[j].task, color)
    }
  }
}

// saveProject()
const projectList = loadProject();
console.log(typeof(projectList)) 
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