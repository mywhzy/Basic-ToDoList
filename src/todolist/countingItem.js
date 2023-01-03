const todoCount = document.getElementById("todo-count");
let count = 0;

// Counting To Do Item
const countTodo = () => {
  const todoItem = todoBox.querySelectorAll("#todo-item");
  count = todoItem.length;
  const text = "남은 할 일: " + count + "개 ";
  todoCount.innerText = text;
  if (count > 0) {
    todoCount.classList.add("countColor");
    todoCount.innerText = text + "\n화이팅!(•ᴗ•)و";
  } else {
    todoCount.classList.remove("countColor");
  }
};
