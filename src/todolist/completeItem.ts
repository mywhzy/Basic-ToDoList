const doneBox = document.getElementById("done-items") as HTMLElement;

// to do item 완료 여부 확인 함수
const isCompleted = (e: MouseEvent, itemBox: HTMLElement) => {
  // 수정 중일 때 complete 방지
  const target = e.target as HTMLElement;
  if (
    target.tagName === "LI" &&
    (<Element>target.lastChild!).id !== "new-todo-input"
  ) {
    target.classList.toggle("completed");
    if (target.classList.contains("completed")) {
      toggleUpdateBtn(e, itemBox);
    } else if (!target.classList.contains("completed")) {
      toggleUpdateBtn(e, itemBox);
    }
  }
};

// update 버튼 toggle 함수 (할 일 완료 시 수정 버튼 숨기기 위해)
const toggleUpdateBtn = (e: MouseEvent, itemBox: HTMLElement) => {
  const target = e.target as HTMLElement;
  if (target.querySelector("#update-btn")) {
    target.querySelector("#update-btn")!.classList.toggle("hidebtn");
  }
  // 할 일을 완료 or 완료 해제 영역에 넣어준다
  itemBox.appendChild(target);
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
