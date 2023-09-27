import { loadProjects } from './storage.js';
import { docClickHandler, newCard, newProjectMenu } from './displayController.js';

function loadTodoList (projectList, projectIndex) {
  const todo = projectList[projectIndex]["todo-list"];

  for (let i = 0; i < todo.length; i++) {
    const addCard = newCard(todo[i].title, todo[i].color);
    for (let j = 0; j < todo[i].tasks.length; j++) {
      addCard.newTask(todo[i].tasks[j].task);
    }
  }
}

function loadPrjList (projectList) {
  for (let i = 0; i < projectList.length; i++) {
    newProjectMenu(projectList[i].title);
  }
}

const projectList = loadProjects();
loadTodoList(projectList, 0);
docClickHandler();
loadPrjList(projectList);

