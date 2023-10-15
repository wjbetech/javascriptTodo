// data
const todoItems = [
  {task: "Learn JavaScript"},
  {task: "Learn React"},
  {task: "Give Maengsly a kiss"}
];


// doc grabbers
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#searchTodos");
const todosList = document.querySelector("#todos-list");
const ul = document.querySelector("ul");
const list = document.getElementsByClassName("todo-item");
const newTodo = document.querySelector("#addTodo");
const addForm = document.querySelector("#add");

// events & functionality

// filter items to show
const filterTodos = (term) => {
  Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("hide"))

  Array.from(ul.children)
    .filter((todo) => todo.textContent.toLowerCase.includes(term))
    .forEach((todo) => todo.classList.remove("hide"))
};

// search for an item
searchForm.addEventListener("keyup", () => {
  const term = searchInput.value.trim().toLowerCase();
  filterTodos(term);
});

// delete an item
todosList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-trash-alt")) {
    e.target.parentElement.parentElement.remove();
  }
});

// sanitize and add a new item
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  const newTodo = addForm.addTodo.value.trim().charAt(0).toUpperCase() + addForm.addTodo.value.slice(1);
  console.log(`New Item: "${newTodo}"`);
  generateTemplateLi(newTodo);
});

const generateTemplateLi = (todo) => {
  if (!todo.length) {
    alert("Please enter a valid task!")
  } else {
    const html = `<li class="todo-item">${todo}<span class="end-icon"><i class='bx bx-trash-alt'></i></span></li>`;
    ul.innerHTML += html;
  }
  addForm.reset();
};
