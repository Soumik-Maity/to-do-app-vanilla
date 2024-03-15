todoEl = document.getElementById("todolist");
addEl = document.getElementById("button");
inputEl = document.getElementById("input");

const todoItems = [];
const addTodo = () => {
  todoItems.push(inputEl.value);
  console.log(todoItems);
  inputEl.value = "";
  createList();
  //   const li = document.createElement("li");
  //   li.textContent = inputEl.value;
  //   todoEl.append(li);
};
const createList = () => {
  todoEl.innerHTML = "";
  todoItems.forEach(function (n, i) {
    todoEl.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
};
const deleteItem = (i) => {
  todoItems.splice(i, 1);
  createList();
};
const editItem = (i) => {
  const editingText = prompt("Enter the new task:");
  if (editingText != null) {
    todoItems[i] = editingText;
  }
  createList();
};
addEl.addEventListener("click", addTodo);
