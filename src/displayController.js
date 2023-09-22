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
  
  const newTodoCard = cardTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');
  const btnNewTask = newTodoCard.querySelector('.js-btn-newtask');
  const inputNewTask = newTodoCard.querySelector('.js-input-newtask');  

  const themeColor = themeColors[color] || themeColors.defaultColor;

  cardTitle.style.backgroundColor = themeColor;
  cardTitle.textContent = title;
  cardContainer.appendChild(newTodoCard);

  const newTask = (taskText) => {
    const addTask = taskTemplate.content.cloneNode(true);
    addTask.querySelector(".js-bordercolor").style.borderColor = themeColor;
    addTask.querySelector('.js-task-text').textContent = taskText;
    taskContainer.appendChild(addTask);
  }

  const clickHandler = () => {

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

  }

  clickHandler();

  return {newTask};
}