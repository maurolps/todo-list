import { loadProject, saveProject } from './storage.js';
import { startListener, newCard } from './displayController.js';

function loadTodoList (projectList, projectIndex) {
  const todo = projectList[projectIndex]["todo-list"];

  for (let i = 0; i < todo.length; i++) {
    const addCard = newCard(todo[i].title, todo[i].color);
    for (let j = 0; j < todo[i].tasks.length; j++) {
      addCard.newTask(todo[i].tasks[j].task);
    }
  }
}

// saveProject()
const projectList = loadProject();
loadTodoList(projectList, 0);

// const addCard = newCard("Example card", "cyan");
// addCard.newTask('HelloWorld');

// startListener();

