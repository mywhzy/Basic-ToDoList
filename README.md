## 이번 프로젝트는 *JavaScript 복습*을 위한 _ToDoList_ 기본 CRUD 구현하기입니다.

---

### *HTML + CSS + JS*만을 통한 기본적인 웹 프로그래밍을 진행합니다.

---

#### **현재까지 구현된 기능**

**1. 할 일 _추가_**  
**2. 할 일 _수정_ (🖋버튼 누른 후 엔터 누르면 적용)**  
**3. 할 일 _완료 표시_ (할 일 텍스트 더블 클릭 시 적용)** _=> classList.toggle 이용_  
**4. 할 일 _삭제_ (✖버튼)**  
**5. _남은 할 일 개수_ 나타내기**

---

#### **To Do List의 기본 기능에 충실하기 위해 위와 같은 5가지 기능을 구현하였으며**

#### **1. 해야 할 일을 입력하고 2. 작성한 할 일을 확인하며**

#### **3. 완료한 일 분류와 4. 필요 없는 경우 삭제하고**

#### **5. 내용에 수정이 필요한 경우 업데이트할 수 있게 하였습니다.**

#### **6. 더불어 오늘 날짜와 남은 할 일 개수를 보여주며 사용자의 편의를 더해주었습니다.**

---

```
├─ index.html
├─ src
│  ├─ date.js // show today's date
│  └─ listItem.js // control todolist items
└─ style.css
```

**LiveServer를 통해 실행 가능합니다**

---

5번 기능의 경우 완료된 할 일 ul영역을 따로 분리하여 구현했습니다.  
_완료된 할 일은 수정이 불가하며 완료 해제 및 삭제만 가능_ 합니다.

**타인이 제 코드를 읽었을 때 알기 쉬우려면 저부터 원리를 알고 구현해야겠다고 생각했습니다. 비록 오랜만에 접하는 html과 순수 javascript에 헤매기도 다소 헤맸고 지금도 깔끔한 코드는 아니라는 것을 알지만 그래도 수정 기능을 제외한 추가,완료,삭제는 나름 간결한 코드로 해결할 수 있었다고 생각합니다. 아직은 제 코드를 읽었을 때 타인의 입장에선 왜 이렇게 구현했는지 이해가 어려울 수 있지만 저의 의도와 이 코드가 무엇을 의미하는지 설명할 수 있는 것을 1차 목표로 하였습니다. 그리고 피드백과 개인 공부를 통해 더 성장하여 다음엔 타인이 읽었을 때도 납득 가능하며 간결한 클린 코드를 작성하고자 하는 것이 제 다음 목표입니다.**

기타 기능들도 추가해보기위해 시도할 예정이며 새 기능 추가보다 기존 기능 보완에 더 힘 쓸 예정입니다.  
할 일 추가,완료,삭제를 다소 간결하게 구현했더니 수정 기능을 넣을 때 이슈가 있었고 지금은 일단 완벽한 방식으로 수정하진 못한 상태입니다.  
제가 이용한 방식말고 다른 접근 방식으로 dom을 제어할 수 있지 않을까 싶은데 이 부분은 공부 후에 수정해보고 싶습니다.
