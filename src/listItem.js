const todoInput = document.getElementById("input-box");
const todoAdd = document.getElementById("add-btn");
const todoBox = document.getElementById("list-items");
const doneBox = document.getElementById("done-items");
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

// create list item update,delete button
const createBtn = (parentItem) => {
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
const addToDoList = () => {
  const listitem = document.createElement("li");
  const listvalue = document.createTextNode(todoInput.value);
  listitem.setAttribute("id", "todo-item");
  listitem.appendChild(listvalue);
  listitem.classList.add("noncompleted");
  todoBox.appendChild(listitem);
  createBtn(listitem);
  todoInput.value = "";
};

// 할 일 입력창 빈 값인지 검사
const isCheckedTodoInput = () => {
  if (todoInput.value !== "") {
    addToDoList();
    countTodo();
  } else {
    alert("내용을 입력해주세요!");
  }
};

// to do item 완료 여부 확인 함수
const isCompleted = (e, itemBox) => {
  // 수정 중일 때 complete 방지
  if (e.target.tagName === "LI" && e.target.lastChild.id !== "new-todo-input") {
    e.target.classList.toggle("completed");
    if (e.target.classList.contains("completed")) {
      toggleUpdateBtn(e, itemBox);
    } else if (!e.target.classList.contains("completed")) {
      toggleUpdateBtn(e, itemBox);
    }
  }
};

// update 버튼 toggle 함수 (할 일 완료 시 수정 버튼 숨기기 위해)
const toggleUpdateBtn = (e, itemBox) => {
  if (e.target.querySelector("#update-btn")) {
    e.target.querySelector("#update-btn").classList.toggle("hidebtn");
  }
  itemBox.appendChild(e.target);
  countTodo();
};

// remove list item
const removeTodoItem = (e) => {
  if (e.target.id === "del-btn") {
    e.currentTarget.querySelector("#todo-item").remove();
    countTodo();
  }
};

// insert to do item - click btn
todoAdd.addEventListener("click", () => {
  isCheckedTodoInput();
});

// insert to do item - click enter
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    isCheckedTodoInput();
  }
});

// Complete To Do Item
todoBox.addEventListener("dblclick", (e) => {
  isCompleted(e, doneBox);
});

// Complete 해제
doneBox.addEventListener("dblclick", (e) => {
  isCompleted(e, todoBox);
});

// Remove To Do Item target과 cuurentTarget의 차이점 알기
todoBox.addEventListener("click", (e) => {
  removeTodoItem(e);
});

// Remove Done Item
doneBox.addEventListener("click", (e) => {
  removeTodoItem(e);
});

// Update To Do Item text
todoBox.addEventListener("click", (e) => {
  const newTextInput = document.createElement("input");
  const nowText = e.target.parentNode.innerText.substring(
    0,
    e.target.parentNode.innerText.length - 4
  );
  newTextInput.setAttribute("id", "new-todo-input");
  newTextInput.setAttribute("value", nowText);
  newTextInput.setAttribute("placeholder", "내용을 입력해 수정해주세요.");
  // 클릭 이벤트(수정 인풋 창 오픈) 중복 방지
  if (
    e.target.id === "update-btn" &&
    e.target.parentNode.lastChild.id !== "new-todo-input"
  ) {
    e.target.parentNode.appendChild(newTextInput);
    newTextInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && newTextInput.value !== "") {
        const temp = e.target.parentNode; // e.target.parentNode.innerText값 변경 후에 기존 e.target 없어지는 이유에서 변수 사용
        e.target.parentNode.innerText = e.target.value;
        createBtn(temp);
      }
    });
  }
});
