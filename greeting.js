const form = document.querySelector(".js-form"), // 사용자 입력 양식(form)
    input = form.querySelector("input"), // 사용자 입력 요소(input text)
    greeting = document.querySelector(".js-greetings"); // 클래스

const USER_LS ="currentUser", // 문자열 변수선언
    SHOWING_CN = "showing"; 

function saveName(text){ //이름저장(매개변수)
    localStorage.setItem(USER_LS, text); //localStorage에 (USER_LS) key 선언하고 (text) value 추가
}

function handleSubmit(event){  // 이벤트 처리 함수 (event=개체처리기. 개체에 엑세스 가능)
    event.preventDefault(); // *submit event 발생 시 page reload 방지
   
    const currentValue = input.value; // input(HTMLinputElement)요소의 값
    paintGreeting(currentValue); // 함수에 currentValue값 입력
    saveName(currentValue); // 함수에 currentValue값 입력
}

function askForName() { 
    form.classList.add(SHOWING_CN); // element의 클래스리스트에 클래스 추가
    form.addEventListener("submit", handleSubmit); // **이벤트리스너 실행 ('이벤트명', 콜백함수)
}

function paintGreeting(text){ // 'text'라는 argument(인자)를 가지는 함수
    form.classList.remove(SHOWING_CN); // element의 클래스리스트에서 클래스 삭제
    greeting.classList.add(SHOWING_CN); // element의 클래스리스트에 클래스 추가
    greeting.innerText = `Hello ${text}`; // element에 텍스트 추가
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS); // 변수선언 : localStorage의 USER_LS key 에서 value 가져오기
    if (currentUser === null){ // l.S key의 value가 null일때 = 유저가 없을 때
        // 유저가 없을 때
        askForName(); // 함수 실행
    }else{
        // 유저가 있을 때
        paintGreeting(currentUser); // 함수 실행
    }
}

function init() {
    loadName();
}

init(); // 함수 실행

/*
1. 두개의 플레이어 선택
2. localStorage 

* querySeletorAll
* localStorage
작은 정보(자바스크립트 정보)를 유저컴퓨터에 저장하는 방법

---

*
handleSubmit(event)내에 e.preventDefault()가 없을때 submit 이벤트가 발생하면 page가 reload됨으로써 사라져버림
form을 제출하는 event가 발생하면 evnet가 거품처럼 document까지 올라감 = 새로고침됨
> 이게 event의 디폴트 행동이고(새로고침) 이것을 막고자 함

**
이벤트 대상(target)의 addEventListener 메소드로 지정한 이벤트가 대상에 전달되었을 때 실행할 함수를 등록할 수 있음
대상: Element, Document, Window, XMLHTTPRequest 등, 이벤트를 지원하는 모든 대상

target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted]);

type : 반응할 이벤트의 종류를 나타내는 문자열, 대소문자 구분
listener : 지정한 이벤트가 발생했을 때 알림을 받는 객체, EventListener 인터페이스나 함수를 구현하는 객체여야 함

addEventListener 메소드를 사용해서 이벤트 핸들러를 등록하는 경우, 같은 이벤트에 여러 개의 핸들러를 등록할 수 있음


-

localStorage is a JS api to save stuff on the browser, Cookies are used to save things from the backend like sessions and things like that.
*/