let taskIndex = 0;
let paletteIndex = 3;

const themeColors = {
  red: "#fecaca",
  lime: "#d9f99d",
  cyan: "#a5f3fc",
  purple: "#e9d5ff",
  pink: "#fbcfe8",
  teal: "#99f6e4",
  defaultColor: "#ffedd5"
}

export const docClickHandler = () => {

  const btnMobileMenu = document.querySelector(".js-btn-mobile-menu");
  const siderBar = document.querySelector(".js-sidebar");
  const inputNewCard = document.querySelector('.js-input-newcard'); 
  const btnNewCard = document.querySelector('.js-btn-newcard');
  const btnAddProject = document.querySelector('.js-btn-addproject');
  const newProjectContainer = document.querySelector('.js-newproject');
  const newProjectInput = document.querySelector('.js-input-newproject');
  const btnNewProject = document.querySelector('.js-btn-newproject');
  const projectsContainer = document.querySelector('.js-projects-container');
  const newProject = document.getElementById('new-project-template').content.cloneNode(true);

  btnAddProject.addEventListener('click', () => {
    newProjectContainer.classList.add('scale-100');
    btnAddProject.classList.add('scale-0');
    newProjectInput.focus();
  })
  
  newProjectInput.addEventListener('keydown', (e) => {
    const newProjectName = newProjectInput.value;
    if (e.keyCode === 13 && newProjectName !== "") {
      newProjectInput.value = '';
      setTimeout(() => {
        btnAddProject.classList.remove('scale-0');
      }, 2000);
      newProjectContainer.classList.remove('scale-100');
      newProject.querySelector('.js-btn').textContent = newProjectName;
      projectsContainer.appendChild(newProject);
      // newProject(newProjectName);
    }
  })

  btnNewProject.addEventListener('click', () => {
    const newProjectName = newProjectInput.value;
    if (newProjectName !== "") {
      newProjectInput.value = '';
      setTimeout(() => {
        btnAddProject.classList.remove('scale-0');
      }, 2000);
      newProjectContainer.classList.remove('scale-100');
      newProject.querySelector('.js-btn').textContent = newProjectName;
      projectsContainer.appendChild(newProject);
      // newProject(newProjectName);
    }
  })

  btnMobileMenu.addEventListener("click", () => {
    siderBar.classList.toggle("-translate-x-full");
  })
  
  inputNewCard.addEventListener('keydown', (e) => {
    const newCardTitle = inputNewCard.value;
    if (e.keyCode === 13 && newCardTitle !== "") {
      newCard(newCardTitle, "defaultColor");
      inputNewCard.value = "";
    }
  })

  btnNewCard.addEventListener('click', () => {
    const newCardTitle = inputNewCard.value;

    if (newCardTitle !== "") {
      newCard(newCardTitle, "defaultColor");
      inputNewCard.value = "";
    }
  })


}

export function newCard (title, color) {
  const cardContainer = document.getElementById('js-card-container');
  const cardTemplate = document.getElementById('js-card-template');
  const taskTemplate = document.getElementById('js-task-template');
  
  const newTodoCard = cardTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');

  const btnNewTask = newTodoCard.querySelector('.js-btn-newtask');
  const btnPalette = newTodoCard.querySelector('.js-btn-palette');
  const btnTrash = newTodoCard.querySelector('.js-btn-trash');
  const inputNewTask = newTodoCard.querySelector('.js-input-newtask');
  const cardScale = newTodoCard.querySelector('.js-card-scale');

  let themeColor = themeColors[color] || themeColors.defaultColor;

  cardTitle.style.backgroundColor = themeColor;
  cardTitle.textContent = title;
  btnPalette.style.color = themeColor;
  cardContainer.appendChild(newTodoCard);

  const animateCard = () => {
    setTimeout(() => {
      cardScale.classList.remove("scale-0");
      setTimeout(() => {
        cardScale.classList.remove("scale-0");
      }, 1000);
    }, 100);
  }

  const newTask = (taskText) => {
    taskIndex++;
    const addTask = taskTemplate.content.cloneNode(true);
    const taskInput = addTask.querySelector(".js-task-input");
    const taskLabel = addTask.querySelector('.js-task-label');

    taskInput.style.borderColor = themeColor;
    taskLabel.textContent = taskText;
    taskInput.id = "task" + taskIndex.toString();
    taskLabel.htmlFor = "task" + taskIndex.toString();
    taskContainer.appendChild(addTask);
  }

  const cardClickHandler = () => {

    btnNewTask.addEventListener('click', () => {
      const inputText = inputNewTask.value;
      if (inputText !== "" ) {
        newTask(inputText);
        inputNewTask.value = "";
      }
    })

    inputNewTask.addEventListener('keydown', (e) => {
      const inputText = inputNewTask.value;
      if (e.keyCode === 13 && inputText !== "") {
        newTask(inputText);
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