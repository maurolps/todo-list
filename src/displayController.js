import { LoadProjects, UpdateStorage } from './storage.js';

let taskIndex = 0;
let markIndex = 0;
let paletteIndex = 3;
let projectIndex = 0;
let cardIndex = 0;
let currentProject = 0;

const themeColors = {
  red: "#fca5a5",
  lime: "#a3e635",
  cyan: "#67e8f9",
  purple: "#d8b4fe",
  pink: "#f9a8d4",
  teal: "#5eead4",
  defaultColor: "#fdba74"
}

export function newProjectMenu (projectName) {
  const cardContainer = document.getElementById('js-card-container');
  const projectsContainer = document.querySelector('.js-projects-container');
  const newProject = document.getElementById('new-project-template').content.cloneNode(true);
  const labelNewPrj = newProject.querySelector('.js-label-newprj');
  const inputNewPrj = newProject.querySelector('.js-input-newprj');
  const btnProjectTrash = newProject.querySelector('.js-btn-prj-trash');
  const newProjectContainer = newProject.querySelector('.js-new-proj-container');

  inputNewPrj.id = projectIndex.toString();
  labelNewPrj.textContent = projectName;
  labelNewPrj.htmlFor = projectIndex.toString();

  inputNewPrj.dataset.index = projectIndex;
  projectIndex++;
  if (projectIndex === 1) inputNewPrj.setAttribute('checked', true);
  projectsContainer.appendChild(newProject);

  inputNewPrj.addEventListener('change', (e) => {
    cardContainer.innerHTML = '';
    cardIndex = 0;
    taskIndex = 0;
    markIndex = 0;
    const projectList = LoadProjects();
    currentProject = inputNewPrj.dataset.index
    projectList.loadTodoList(currentProject);
  });

  btnProjectTrash.addEventListener('click', () => {
    const confirmTrash = confirm(`Remove project: ${projectName} ?`);
    if (confirmTrash) { 
      newProjectContainer.innerHTML = '';
      cardContainer.innerHTML = '';
    }
  })

}

export const docClickHandler = () => {
  const btnMobileMenu = document.querySelector(".js-btn-mobile-menu");
  const siderBar = document.querySelector(".js-sidebar");
  const inputNewCard = document.querySelector('.js-input-newcard'); 
  const btnNewCard = document.querySelector('.js-btn-newcard');
  const btnAddProject = document.querySelector('.js-btn-addproject');
  const newProjectContainer = document.querySelector('.js-newproject');
  const newProjectInput = document.querySelector('.js-input-newproject');
  const btnNewCancel = document.querySelector('.js-btn-new-cancel');

  btnAddProject.addEventListener('click', () => {
    newProjectContainer.classList.add('scale-100');
    btnAddProject.classList.add('scale-0');
    newProjectInput.focus();
  })
  
  newProjectInput.addEventListener('keydown', (e) => {
    const newProjectName = newProjectInput.value;
    if (e.keyCode === 13 && newProjectName !== "") {
      newProjectInput.value = '';
      newProjectInput.blur();
      newProjectMenu(newProjectName);
    }
  })

  newProjectInput.addEventListener('blur', () => {
    setTimeout(() => {
      btnAddProject.classList.remove('scale-0');
    }, 300);
    newProjectContainer.classList.remove('scale-100');
  })

  btnNewCancel.addEventListener('click', () => {
    newProjectInput.blur();
  })

  btnMobileMenu.addEventListener("click", () => {
    siderBar.classList.toggle("-translate-x-full");
  })
  
  inputNewCard.addEventListener('keydown', (e) => {
    const newCardTitle = inputNewCard.value;
    if (e.keyCode === 13 && newCardTitle !== "") {
      NewCard(newCardTitle, "defaultColor", false, true);
      inputNewCard.value = "";
    }
  })

  btnNewCard.addEventListener('click', () => {
    const newCardTitle = inputNewCard.value;

    if (newCardTitle !== "") {
      NewCard(newCardTitle, "defaultColor", false, true);
      inputNewCard.value = "";
    }
  })


}

export function NewCard (title, color, priority, updateCard = false) {
  const updateStorage = UpdateStorage();
  const cardContainer = document.getElementById('js-card-container');
  const cardTemplate = document.getElementById('js-card-template');
  const taskTemplate = document.getElementById('js-task-template');
  
  const newTodoCard = cardTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');
  const cardPin = newTodoCard.querySelector('.js-pin');
  const cardUnPin = newTodoCard.querySelector('.js-unpin');

  const btnNewTask = newTodoCard.querySelector('.js-btn-newtask');
  const btnPalette = newTodoCard.querySelector('.js-btn-palette');
  const btnTrash = newTodoCard.querySelector('.js-btn-trash');
  const inputNewTask = newTodoCard.querySelector('.js-input-newtask');
  const cardScale = newTodoCard.querySelector('.js-card-scale');

  let themeColor = themeColors[color] || themeColors.defaultColor;
  cardScale.dataset.index = cardIndex;
  cardIndex++;
  markIndex = 0;

  if (updateCard) updateStorage.saveCard(currentProject, title);

  cardTitle.style.backgroundColor = themeColor;
  cardTitle.textContent = title;
  btnPalette.style.color = themeColor;

  if (priority) {
    cardContainer.insertBefore(newTodoCard, cardContainer.firstChild);
    cardPin.classList.toggle('scale-0');
  } else {
    cardContainer.appendChild(newTodoCard);
    cardUnPin.classList.toggle('scale-0');
  }
  const animateCard = () => {
    setTimeout(() => {
      cardScale.classList.remove("scale-0");
      setTimeout(() => {
        cardScale.classList.remove("scale-0");
      }, 1000);
    }, 100);
  }

  const newTask = (taskText, update = false, marked = false) => {
    taskIndex++;
    const addTask = taskTemplate.content.cloneNode(true);
    const taskInput = addTask.querySelector(".js-task-input");
    const taskLabel = addTask.querySelector('.js-task-label');
    const btnTrash = addTask.querySelector('.js-btn-deltask');
    const btnEditTask = addTask.querySelector('.js-btn-edittask');
    const inputEditTask = addTask.querySelector('.js-input-edittask');
    const btnEditCancel = addTask.querySelector('.js-btn-editcancel');
    const editTaskContainer = addTask.querySelector('.js-edittask');
    const task = addTask.querySelector('.js-task');

    task.dataset.index = markIndex;
    markIndex++;

    taskInput.checked = marked;
    taskInput.style.borderColor = themeColor;
    taskLabel.textContent = taskText;
    taskInput.id = "task" + taskIndex.toString();
    taskLabel.htmlFor = "task" + taskIndex.toString();
    taskContainer.appendChild(addTask);

    if (update) updateStorage.saveTask(currentProject, cardScale.dataset.index, taskText);

    const toggleEdit = (editing = true) => {
      editTaskContainer.classList.toggle('scale-0');
      btnTrash.classList.toggle('scale-0');
      btnEditTask.classList.toggle('scale-0');
      if (editing) {
        taskLabel.classList.toggle('scale-0');
        inputEditTask.focus();
      } else {
        setTimeout(() => {
          taskLabel.classList.toggle('scale-0');
        }, 300);
      }
    }

    taskInput.addEventListener('change', () => {
      const todoIndex = cardScale.dataset.index;
      const tasksIndex = task.dataset.index;
      let mark = false;
      if (taskInput.checked) mark = true;
      updateStorage.saveMark(currentProject , todoIndex, tasksIndex, mark);
    })

    inputEditTask.addEventListener('keydown', (e) => {
      const inputText = inputEditTask.value;
      if (e.keyCode === 13 && inputText !== "") {
        taskLabel.textContent = inputText;
        inputEditTask.value = "";
        inputEditTask.blur();
      }
    })

    btnEditCancel.addEventListener('click', () => {
      toggleEdit(false);
    })

    btnTrash.addEventListener('click', () => {
      task.remove();
    })

    btnEditTask.addEventListener('click', () => {
      toggleEdit();
    })

    inputEditTask.addEventListener('blur', () => {
      toggleEdit(false);
    })
  }

  const togglePin = () => {
    cardUnPin.classList.toggle('scale-0');
    cardPin.classList.toggle('scale-0');
  }

  const cardClickHandler = () => {

    cardPin.addEventListener('click', () => {
      cardContainer.appendChild(cardScale);
      togglePin();
    })

    cardUnPin.addEventListener('click', () => {
      cardContainer.insertBefore(cardScale, cardContainer.firstChild);
      togglePin();
    })

    btnNewTask.addEventListener('click', () => {
      const inputText = inputNewTask.value;
      if (inputText !== "" ) {
        newTask(inputText, true);
        inputNewTask.value = ""; 
      }
    })

    inputNewTask.addEventListener('keydown', (e) => {
      const inputText = inputNewTask.value;
      if (e.keyCode === 13 && inputText !== "") {
        newTask(inputText, true);
        inputNewTask.value = "";
      }
    })

    btnPalette.addEventListener('click', () => {
      themeColor = Object.values(themeColors)[paletteIndex]
      paletteIndex++
      if (paletteIndex > 6) paletteIndex = 0;
      cardTitle.style.backgroundColor = themeColor;
      btnPalette.style.color = themeColor; 
      cardScale.querySelectorAll('input').forEach((input) => {
        if (input.id != "new-task") input.style.borderColor = themeColor;
      });

    });

    btnTrash.addEventListener('click', () => {
      cardScale.remove();
    })

  }

  animateCard();
  cardClickHandler();

  return {newTask};
}