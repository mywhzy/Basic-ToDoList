const todoInput = document.getElementById("input-box") as HTMLInputElement;
const todoAdd = document.getElementById("add-btn") as HTMLButtonElement;
const todoBox = document.getElementById("list-items") as HTMLElement;

// create list item update,delete button
const createBtn = (parentItem: HTMLElement) => {
  const updateBtn = document.createElement("button");
  const deletebtn = document.createElement("button");
  const updatebtnValue = document.createTextNode("🖋");
  const delbtnvalue = document.createTextNode("✖");
  updateBtn.setAttribute("id", "update-btn");
  updateBtn.appendChild(updatebtnValue);
  deletebtn.setAttribute("id", "del-btn");
  deletebtn.appendChild(delbtnvalue);
  parentItem.appendChild(deletebtn);
  parentItem.appendChild(updateBtn);
};

// create to do item
const createListItem = () => {
  const listitem = document.createElement("li");
  const listvalue = document.createTextNode(todoInput.value);
  listitem.setAttribute("id", "todo-item");
  listitem.appendChild(listvalue);
  listitem.classList.add("noncompleted");
  todoBox?.appendChild(listitem);
  createBtn(listitem);
  todoInput.value = "";
};

// 할 일 입력창 빈 값인지 검사 후 item add 및 count
const checkAddItem = () => {
  if (todoInput.value !== "") {
    createListItem();
    countTodo();
  } else {
    alert("내용을 입력해주세요!");
  }
};

// insert to do item - click btn
todoAdd.addEventListener("click", () => {
  checkAddItem();
});

// insert to do item - click enter
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkAddItem();
  }
});
