const toDoForm = document.querySelector(".js-toDoForm"),  // 1_toDo 영역 양식
    toDoInput = toDoForm.querySelector("input"), // 2_태그, 사용자 입력 요소
    toDoList = document.querySelector(".js-toDoList"); // 3_toDoList

const TODOS_LS = 'toDos'; // 8_문자열 변수 선언

let toDos = []; // to do list가 추가될 때 마다 여기에 배열로 입력됨


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify (toDos));
}

function paintToDo(text){ // 14_Todo 생성 (*매개변수)
   const li = document.createElement("li"); //17_ 문서에 요소만들기 (li)
   const delBtn = document.createElement("button"); // 18_문서에 요소만들기 (button)
    delBtn.innerHTML = "❌"; // 19_button 안에 해당 text 삽입
    delBtn.addEventListener("click", deleteToDo)
    const span = document.createElement("span"); // 20_문서에 요소만들기 (span)
    const newId = toDos.length + 1;


    span.innerText = text // 21_span 안에 (*매개변수) 삽입
    li.appendChild(span); //  22_span을 li의 child element로 삽입
    li.appendChild(delBtn); //  23_delBtn을 li의 child element로 삽입
    li.id = newId;

    toDoList.appendChild(li); // 24_li를 toDoLIst 클래스의 child element로 삽입

    const toDoObj = {
        text: text, // 여기서 text = currentValue
        id: newId
    };
    toDos.push(toDoObj); // 배열에.삽입(이 오브제를)
    saveToDos();
}

function handleSubmit(event){ //11_이벤트 처리 함수 (event)
    event.preventDefault(); // 12_submit시 page reload 방지
    const currentValue = toDoInput.value; // 13_Input에 입력된 value값
    paintToDo(currentValue); // 15_paintToDo에 위 value넣어 실행
    toDoInput.value = ""; // 16_input text 영역에 남아있는 value값을 삭제함
}

function loadToDos(){ //_7
    const loadedToDos = localStorage.getItem(TODOS_LS);  //_7
    if(loadedToDos !== null){ //_9
        const parsedToDos = JSON.parse(loadedToDos); //loadedToDos로 배열을 가져옴
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); // TODOS_LS의 'text' Key에 들어있는 Value를 노출시키는 것임
        });

    }

}

function init() {  // 4
    loadToDos(); // 6
    toDoForm.addEventListener("submit", handleSubmit) // 10_ **이벤트리스너 - toDo영역에서 submit 발생하면 handleSubmit 함수 실행
}

init(); // 5

/*

greeting.js와 형식은 거의 유사하나, 불필요한 block 과 display 기능이 삭제됨

파일이 달라도 상수명이 같으면 좋지 않음. js모듈을 분리시켜야함

Node.appendChild() : 무언가를 ()의 부모 요소안에 넣는것.
자세한 설명 >
해당 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면
appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다.
(문서에 존재하는 노드를 다른 곳으로 붙이기 전에 부모 노드로 부터 지워버릴 필요는 없습니다.)

-

할 일 목록을 저장하고, Array로 만들기

localStorage에도 todo를 저장해줘야함
로컬스토리지에는 js데이터를 넣어줄 수 없으며, 오직 string만 저장 가능

*JSON.stringify = js언어를 string으로 바꿔줌

*/