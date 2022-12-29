const todoInput = document.getElementById("input-box");
const todoAdd = document.getElementById("add-btn");
const todoBox = document.getElementById("list-items");
const doneBox = document.getElementById("done-items");
const todoCount = document.getElementById("todo-count");
let itemId = 0;
let count = 0;

// Counting To Do Item
const countTodo = () => {
  count = todoBox.childElementCount;
  todoCount.innerText = "남은 할 일: " + count + "개";
};

// Insert To Do Item
todoAdd.addEventListener("click", () => {
  if (todoInput.value !== "") {
    const listitem = document.createElement("li");
    const listvalue = document.createTextNode(todoInput.value);
    listitem.appendChild(listvalue);
    listitem.classList.add("noncompleted");
    const updateBtn = document.createElement("button");
    updateBtn.setAttribute("id", "update-btn");
    const updatebtnValue = document.createTextNode("🖋");
    updateBtn.appendChild(updatebtnValue);
    const itemdelbtn = document.createElement("button");
    itemdelbtn.setAttribute("id", "del-btn");
    const delbtnvalue = document.createTextNode("✖");
    itemdelbtn.appendChild(delbtnvalue);
    itemdelbtn.classList.add("deltebtn");
    todoBox.appendChild(listitem);
    listitem.appendChild(updateBtn);
    listitem.appendChild(itemdelbtn);
    todoInput.value = "";
    itemId++;
    countTodo();
  }
});

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    todoAdd.click();
  }
});

// Complete To Do Item 이벤트위임이용 부모(ul)->자손(li)
todoBox.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    if (e.target.classList.contains("completed")) {
      if (e.target.children[0].id === "update-btn") {
        e.target.children[0].classList.toggle("hidebtn");
      }
      doneBox.appendChild(e.target);
      countTodo();
      console.log(todoBox.childElementCount);
      console.log(doneBox.childElementCount);
    }
  }
});

// Complete 해제
doneBox.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
  if (!e.target.classList.contains("completed")) {
    if (e.target.children[0].id === "update-btn") {
      e.target.children[0].classList.toggle("hidebtn");
    }
    todoBox.appendChild(e.target);
    countTodo();
    console.log(todoBox.childElementCount);
    console.log(doneBox.childElementCount);
  }
});

// Remove To Do Item 자손(button)->부모(li)
todoBox.addEventListener("click", (e) => {
  if (e.target.id === "del-btn") {
    e.target.parentNode.remove();
    countTodo();
  }
});

// Remove Done Item
doneBox.addEventListener("click", (e) => {
  if (e.target.id === "del-btn") {
    e.target.parentNode.remove();
    countTodo();
  }
});

// Update To Do Item text
todoBox.addEventListener("click", (e) => {
  const newText = document.createElement("input");
  newText.setAttribute("id", "new-todo-input");
  let nowText = e.target.parentNode.innerText.substring(
    0,
    e.target.parentNode.innerText.length - 3
  );
  newText.setAttribute("value", nowText);
  // innerText 변경 후 수정,삭제 버튼 지워지는 이슈 수정위해 추가
  const itemdelBtn = document.createElement("button");
  const delbtnValue = document.createTextNode("X");
  itemdelBtn.setAttribute("id", "del-btn");
  itemdelBtn.appendChild(delbtnValue);
  const updateBtn = document.createElement("button");
  updateBtn.setAttribute("id", "update-btn");
  const updatebtnValue = document.createTextNode("🖋");
  updateBtn.appendChild(updatebtnValue);
  // 클릭 이벤트(수정 인풋 창 오픈) 중복 방지
  if (
    e.target.id === "update-btn" &&
    e.target.parentNode.lastChild.id !== "new-todo-input"
  ) {
    e.target.parentNode.appendChild(newText);
    newText.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const temp = e.target.parentNode; // e.target.parentNode.innerText값 변경 후에 기존 e.target 없어지는 이유에서 변수 사용
        e.preventDefault();
        e.target.parentNode.innerText = e.target.value;
        temp.appendChild(updateBtn);
        temp.appendChild(itemdelBtn);
      }
    });
  }
});
