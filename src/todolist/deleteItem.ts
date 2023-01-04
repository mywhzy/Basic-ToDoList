// remove list item
const removeTodoItem = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const parentTarget = target.parentNode as HTMLElement;
  if (target.id === "del-btn") {
    parentTarget.remove();
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
