$(function () {
    var frm = document.getElementById('frm');
    frm.addEventListener('click', function () {
        //1. 폼에 입력된 값을 다 가지고 ACTION에 연결된 페이지로 이동, 전송…하는 함수
        $("#frm").submit(function (event) {
            //2. 편의시설에 입력된 값을 각각의 변수에 할당…id에 맞춰서
            //  alert 창으로 값 확인…폼 초기화, password
            if ($("#Range_medical").val() >= 7){
                var medical = 7;
            }
            else{
                var medical = $("#Range_medical").val();
            } //의료
            if ($("#Range_facility").val() <= 3){
                var facility = 0;
            }
            else if ($("#Range_facility").val() <= 6){
                var facility = 1;
            } 
            else {
                var facility = 2;
            } //복지
            if ($("#Range_convenient").val() <= 2){
                var convenient = 0;
            }
            else if ($("#Range_convenient").val() <= 5){
                var convenient = 1;
            }
            else if ($("#Range_convenient").val() <= 8){
                var convenient = 2;
            }
            else if (9 <= $("#Range_convenient").val()){
                var convenient = 3;
            } //편의
            if ($("#Range_leisure").val() <= 3){
                var leisure = $("#Range_leisure").val();
            }
            else if ($("#Range_leisure").val() <= 4){
                var leisure = 3;
            }
            else if($("#Range_leisure").val() <= 6){
                var leisure = 4;
            }
            else if($("#Range_leisure").val() <= 8){
                var leisure = 5;
            }
            else if(9 <= $("#Range_leisure").val()){
                var leisure = 6;
            } //여가
            var traffic = parseInt($("#Range_traffic").val())+1; // 교통
            var restaurant = $("#Range_restaurant").val(); // 식당
            if ($("#Range_cafe").val() >= 8){
                var cafe = 8;
            }
            else{
                var cafe = $("#Range_cafe").val();
            } // cafe
            if ($("#Range_fastfood").val() <= 3){
                var fastfood = 0;
            }
            else if($("#Range_fastfood").val() <= 6){
                var fastfood = 1;
            }
            else if($("#Range_fastfood").val()){
                var fastfood = 2;
            } 
            if ($("#Range_shopping").val() < 5){
                var shopping = 0;
            }
            else{
                var shopping = 1;
            }
            if ($("#Range_market").val() <= 1){
                var market = 0;
            }
            else if ($("#Range_market").val() <= 3){
                var market = 1;
            }
            else if ($("#Range_market").val() <= 5){
                var market = 2;
            }
            else if ($("#Range_market").val() <= 7){
                var market = 3;
            }
            else if (8 <= $("#Range_market").val()){
                var market = 4;
            }
            var charter_val = $("#charter_select").val();
            var monthly_val = $("#monthly_select").val();
            var usr_val = $("#usr").val();
            var junwallse = 0;
            //로컬 스토리지에 넣음
            localStorage.setItem('Range_medical', medical);
            localStorage.setItem('Range_facility', facility);
            localStorage.setItem('Range_convenient', convenient);
            localStorage.setItem('Range_leisure', leisure);
            localStorage.setItem('Range_restaurant', restaurant);
            localStorage.setItem('Range_traffic', traffic);
            localStorage.setItem('Range_fastfood', fastfood);
            localStorage.setItem('Range_cafe', cafe);
            localStorage.setItem('Range_market', market);
            localStorage.setItem('Range_shopping', shopping);
            if ($('#charterCheck').is(":checked")) {
                localStorage.setItem('charter_select', charter_val);
                junwallse += 1;
            }
            if ($('#monthlyCheck').is(":checked")) {
                localStorage.setItem('charter_select', charter_val);
                localStorage.setItem('monthly_select', monthly_val);
                junwallse += 1;
            }
            localStorage.setItem('usr', usr_val);
            localStorage.setItem('junwallse', junwallse); 
            // alert(medical + security + shopping + market + leisure + convenient + oil + traffic + restaurant + park + charter_val + monthly_val + usr_val);
            // return confirm(medical+shopping+market+convenient+oil+leisure+park+traffic+restaurant);
            //submit 이벤트 작동안하도록 ..기본적인 이벤트 막아주는 함수,…preventDefault()
            // event.preventDefault();
        }); //submit

        $("#charterCheck").click(function () {
            if ($(this).is(":checked")) {
                $("#charter").show();
                $("#ms_charter").show();
            } else {
                if ($("#monthlyCheck").is(":checked")){
                    $("#charter").show();
                } else {
                    $("#charter").hide();
                    $("#ms_charter").hide();
                }
            }
        }); // 전세 클릭시 가격창

        $("#monthlyCheck").click(function () {
            if ($(this).is(":checked")) {
                $("#charter").show();
                $("#monthly").show();
                $("#ms_monthly").show();
                $("#ms_charter").show();
            } else {
                if ($("#charterCheck").is(":checked")){
                    $("#monthly").hide();
                    $("#ms_monthly").hide();
                } else {
                    $("#charter").hide();
                    $("#monthly").hide();
                    $("#ms_monthly").hide();
                    $("#ms_charter").hide();
                }                       
            }
        }); // 월세 클릭시 가격창
        $("#nextbutton").click(function(){
            $("#next_sidebar").show();
            $("#first_sidebar").hide();
            $("#nextbutton").hide();
            $("#prebutton").show();
            $("#submit").show();
        }); // 다음 버튼 누르면 매물조건
        $("#prebutton").click(function(){
            $("#next_sidebar").hide();
            $("#first_sidebar").show();
            $("#nextbutton").show();
            $("#prebutton").hide();
            $("#submit").hide();
        }); // 다음 버튼 누르면 매물조건
    });
});

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".custom_slider > .thumb.left");
var thumbRight = document.querySelector(".custom_slider > .thumb.right");
var range = document.querySelector(".custom_slider > .range");

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);


// 이 아래 전부 양방향 range2
var inputLeft2 = document.getElementById("input-left2");
var inputRight2 = document.getElementById("input-right2");

var thumbLeft2 = document.querySelector(".custom_slider2 > .thumb.left");
var thumbRight2 = document.querySelector(".custom_slider2 > .thumb.right");
var range2 = document.querySelector(".custom_slider2 > .range");

function setLeftValue2() {
    var _this2 = inputLeft2,
        min2 = parseInt(_this2.min),
        max2 = parseInt(_this2.max);

    _this2.value = Math.min(parseInt(_this2.value), parseInt(inputRight2.value) - 1);

    var percent2 = ((_this2.value - min2) / (max2 - min2)) * 100;

    thumbLeft2.style.left = percent2 + "%";
    range2.style.left = percent2 + "%";
}
setLeftValue2();

function setRightValue2() {
    var _this2 = inputRight2,
        min2 = parseInt(_this2.min),
        max2 = parseInt(_this2.max);

    _this2.value = Math.max(parseInt(_this2.value), parseInt(inputLeft2.value) + 1);

    var percent2 = ((_this2.value - min2) / (max2 - min2)) * 100;

    thumbRight2.style.right = (100 - percent2) + "%";
    range2.style.right = (100 - percent2) + "%";
}
setRightValue2();

inputLeft2.addEventListener("input", setLeftValue2);
inputRight2.addEventListener("input", setRightValue2);