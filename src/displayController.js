let taskIndex = 0;

export const themeColors = {
  red: "#fecaca",
  lime: "#d9f99d",
  cyan: "#a5f3fc",
  purple: "#e9d5ff",
  pink: "#fbcfe8",
  teal: "#99f6e4",
  defaultColor: "#ffedd5"
}

export const startListener = () => {

const btnMobileMenu = document.querySelector(".js-btn-mobile-menu");
const siderBar = document.querySelector(".js-sidebar");

btnMobileMenu.addEventListener("click", () => {
  siderBar.classList.toggle("-translate-x-full");
})

}

export function newCard (title, color) {
  const cardContainer = document.getElementById('js-card-container');
  const cardTemplate = document.getElementById('js-card-template');
  const taskTemplate = document.getElementById('js-task-template');
  const inputNewCard = document.querySelector('.js-input-newcard');  // move this to outside
  
  const newTodoCard = cardTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');

  const btnNewTask = newTodoCard.querySelector('.js-btn-newtask');
  const btnPalette = newTodoCard.querySelector('.js-btn-palette');
  const inputNewTask = newTodoCard.querySelector('.js-input-newtask');
  const cardScale = newTodoCard.querySelector('.js-card-scale');

  const themeColor = themeColors[color] || themeColors.defaultColor;

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

    inputNewCard.addEventListener('keydown', (e) => {
      const newCardTitle = inputNewCard.value;

      if (e.keyCode === 13 && newCardTitle !== "") {
        newCard(newCardTitle, "defaultColor");
        inputNewCard.value = "";
      }
    })

    btnPalette.addEventListener('click', () =>{

    })

  }

  animateCard();
  cardClickHandler();

  return {newTask};
}