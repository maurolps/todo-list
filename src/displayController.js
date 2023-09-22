export const startListener = () => {

const btnMobileMenu = document.querySelector(".js-btn-mobile-menu");
const siderBar = document.querySelector(".js-sidebar");

btnMobileMenu.addEventListener("click", () => {
  siderBar.classList.toggle("-translate-x-full");
})

}

export function newTask (taskContainer, taskText, color) {
  const taskTemplate = document.getElementById('js-task-template');
  const newTask = taskTemplate.content.cloneNode(true);
  newTask.querySelector(".js-bordercolor").style.borderColor = color;
  newTask.querySelector('.js-task-text').textContent = taskText;
  taskContainer.appendChild(newTask);
}

export function newCard (title, color) {
  const cardContainer = document.getElementById('js-card-container');
  const cardTemplate = document.getElementById('js-card-template');
  
  const newTodoCard = cardTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');

  cardTitle.style.backgroundColor = color;
  cardTitle.textContent = title;
  cardContainer.appendChild(newTodoCard);
  return taskContainer;
}