const doneBox = document.getElementById("done-items");

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

// Complete To Do Item
todoBox.addEventListener("dblclick", (e) => {
  isCompleted(e, doneBox);
});

// Complete 해제
doneBox.addEventListener("dblclick", (e) => {
  isCompleted(e, todoBox);
});
