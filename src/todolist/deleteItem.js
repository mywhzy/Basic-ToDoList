// remove list item
const removeTodoItem = (e) => {
  if (e.target.id === "del-btn") {
    e.currentTarget.querySelector("#todo-item").remove();
    countTodo();
  }
};

// Remove To Do Item
todoBox.addEventListener("click", (e) => {
  removeTodoItem(e);
});

// Remove Done Item
doneBox.addEventListener("click", (e) => {
  removeTodoItem(e);
});
