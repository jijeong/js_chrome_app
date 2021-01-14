const body = document.querySelector("body");

const IMG_NUMBER = 5;

/*
function handleImgLoad(){
    console.log("finished loading");
}
원격으로 일하면 이게 필요함
*/ 

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad); > 
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number;
}

function init () {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

/*
math 함수
math.random
math.floor
math.ceil
*/