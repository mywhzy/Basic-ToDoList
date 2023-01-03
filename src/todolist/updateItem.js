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
  // 수정 버튼 클릭 이벤트(수정 인풋 창 오픈) 중복 방지
  if (
    e.target.id === "update-btn" &&
    e.target.parentNode.lastChild.id !== "new-todo-input"
  ) {
    e.target.parentNode.appendChild(newTextInput);
    // 수정 완료 시
    newTextInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && newTextInput.value !== "") {
        const temp = e.target.parentNode; // e.target.parentNode.innerText값 변경 후에 기존 e.target 없어지는 이유에서 변수 사용
        e.target.parentNode.innerText = e.target.value;
        createBtn(temp);
      }
    });
  }
});
