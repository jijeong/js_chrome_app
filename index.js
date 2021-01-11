const title = document.querySelector("#title"); //title 영역 js로 불러오기
const CLICKED_CLASS="clicked"; //오타방지를 위해 clicked라는 문자열을 변수에 넣어놓고 변수를 사용하기로 함

function handleClick() {
    // const currentClass = title.className; //
 
title.classList.toggle(CLICKED_CLASS);

    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);

    // if(currentClass !== CLICKED_CLASS){
        if(hasClass){
        // title.className = CLICKED_CLASS;
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
    */
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

/*
classList = method를 가진다

/*
const title = document.querySelector("#title");

const BASE_COLOR = "white";
const OTHER_COLOR = "black";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }

}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

navi
*/

// JS MDN - JS이벤트를 볼 수 있는 곳