// Update To Do Item text
todoBox.addEventListener("click", (e: MouseEvent) => {
  const newTextInput = document.createElement("input");
  const currentNode = e.target as HTMLElement;
  const parentNode = currentNode.parentNode as HTMLElement;
  const nowText = parentNode.innerText.substring(
    0,
    parentNode.innerText.length - 4
  );
  newTextInput.setAttribute("id", "new-todo-input");
  newTextInput.setAttribute("value", nowText);
  newTextInput.setAttribute("placeholder", "내용을 입력해 수정해주세요.");
  // 수정 버튼 클릭 이벤트(수정 인풋 창 오픈) 중복 방지
  if (
    currentNode.id === "update-btn" &&
    (<Element>parentNode.lastChild).id !== "new-todo-input"
  ) {
    parentNode.appendChild(newTextInput);
    // 수정 완료 시
    newTextInput.addEventListener("keypress", (e: KeyboardEvent) => {
      const inputTarget = e.target as HTMLInputElement;
      const inputParentTarget = inputTarget.parentNode as HTMLElement;
      if (e.key === "Enter" && newTextInput.value !== "") {
        const temp = inputParentTarget; // e.target.parentNode.innerText값 변경 후에 기존 e.target 없어지는 이유에서 변수 사용
        inputParentTarget.innerText = inputTarget.value;
        createBtn(temp);
      }
    });
  }
});
