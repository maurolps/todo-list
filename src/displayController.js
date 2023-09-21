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
  const newTask = taskTemplate.content.cloneNode(true);
  const taskContainer = newTodoCard.querySelector('.js-task-container');
  const cardTitle = newTodoCard.querySelector('.js-card-title');

  cardTitle.style.backgroundColor = color;
  cardTitle.textContent = title;
  newTask.querySelector(".js-bordercolor").style.borderColor = color;
  taskContainer.appendChild(newTask);
  cardContainer.appendChild(newTodoCard);
}