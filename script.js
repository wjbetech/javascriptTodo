// data
const todoItems = [
  {task: "Learn JavaScript"},
  {task: "Learn React"},
  {task: "Give Maengsly a kiss"}
]


// doc grabbers
const searchInput = document.querySelector("#searchTodos");
const newTodo = document.querySelector("#addTodo");
const todosList = document.querySelector("#todos-list");
const searchForm = document.querySelector("#search");
const addForm = document.querySelector("#add");
const ul = document.querySelector("ul")

// passing data



// events & functionality
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Search submitted!")
  const newSearch = searchForm.searchTodos.value;

})

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  const newTodo = addForm.addTodo.value.trim().charAt(0).toUpperCase() + addForm.addTodo.value.slice(1);
  console.log(`New Item: "${newTodo}"`);
  generateTemplateLi(newTodo);
})

const generateTemplateLi = (todo) => {
  if (!todo.length) {
    alert("Please enter a valid task!")
  } else {
    const html = `<li class="todo-item">${todo}<span class="end-icon"><i class='bx bx-trash-alt'></i></span></li>`;
    ul.innerHTML += html;
  }
  addForm.reset();
}
