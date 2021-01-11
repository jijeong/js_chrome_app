const clockContainer = document.querySelector(".js-clock"), // 시계 들어가는 구역
    clockTitle = clockContainer.querySelector("h1"); //시계 들어가는 구역 내의 시계 영역

function getTime() {
    const date = new Date(); // date object 생성과 초기화
    const minutes = date.getMinutes(); // date object 중 분 생성
    const hours = date.getHours(); // 시 생성
    const seconds = date.getSeconds(); // 초 생성
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
} // 시계영역에 해당 텍스트를 삽입할 것

function init() {
    getTime(); // getTime함수 실행
    setInterval(getTime, 1000); // (getTime 함수를 , 1.000sec 간격으로실행)
}

init(); //init 함수 실행

/*
setInterval ()

seconds < 10 ? `0${seconds}`:seconds
= 초가 10보다 작다면 ? 초 앞에 0을 붙일거고 : 그게 아니라면 그냥 초를 보여줄거야
*/