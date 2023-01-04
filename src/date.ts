// Show today's date
// const today = new Date();
const today: Date = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// today의 값이 null이 아니다(무조건 할당됨)를 컴파일러에게 전달하기 위해 !연산자 추가
document.getElementById("today")!.innerHTML =
  "Today is " + year + "/" + month + "/" + day + " •ᴗ•";
