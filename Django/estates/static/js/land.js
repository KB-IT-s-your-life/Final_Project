let mainText = document.querySelector('.main_txt'); //h1태그를 선택
let mainimg = document.querySelector('.photo'); //h1태그를 선택
let target = document.querySelector("#dynamic");
let search = document.querySelector(".wrap_typing");
let tedri = document.querySelector(".tedri");
let button_index = document.querySelector(".button_index");
let photo1 = document.querySelector(".photo");


let mainText1 = document.querySelector('.main_txt1'); //두번쨰 화면
let main_txt2 = document.querySelector('.main_txt2');


function randomString(){
    let stringArr = ["음식점 많은 게 좋아", "집 근처에 장보는 시설이 많았으면..", "카페가 많은 게 좋아","운동을 좋아해서 헬스장 있었으면 해","버스정류장이 많았으면 좋겠어"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split(""); //한글자씩 배열로 만듬

    return selectStringArr;
}
//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 2000);
    }
}

function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);

mainText.style.animation='text_slide 1s ease-out forwards';
search.style.animation='text_slide 1s ease-out forwards';
tedri.style.animation='text_slide 1s ease-out forwards';
button_index.style.animation='text_slide 1s ease-out forwards';

window.addEventListener('scroll',function(){ //스크롤 되면
    let value = window.scrollY;   //스크롤될때마다 y좌표 들고오기
    console.log("scrollY",value); 

    if(value>130){
        mainText.style.animation='text_disappear 1s ease-out forwards';
        // mainimg.style.animation='img_disappear 1s ease-out forwards';
        search.style.animation='text_disappear 1s ease-out forwards';
        tedri.style.animation='text_disappear 1s ease-out forwards';
        button_index.style.animation='text_disappear 1s ease-out forwards';
        
    } /*forwards는 계속사라지게*/
    else{
        mainText.style.animation='text_slide 1s ease-out forwards';
        // mainimg.style.animation='img_slide 1s ease-out forwards';
        search.style.animation='text_slide 1s ease-out forwards';
        tedri.style.animation='text_slide 1s ease-out forwards';
        button_index.style.animation='text_slide 1s ease-out forwards';

    }

    if(value < 500 | value > 1300){
        mainText1.style.animation='text_disappear 1.5s ease-out forwards';
        main_txt2.style.animation='text_disappear 1.5s ease-out forwards';
        photo1.style.animation='img_disappear 1.5s ease-out forwards';
        
    }
    else{
        mainText1.style.animation='text_slide 1.5s ease-out forwards';
        main_txt2.style.animation='text_slide 1.5s ease-out forwards';
        photo1.style.animation='img_slide 1.5s ease-out forwards';
    }
})

