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
            var charter_min = 0;
            var charter_max = 10000000;
            var monthly_min = 0;
            var monthly_max = 10000000;

            // 전세(보증금) 최소값
            if (slider_left2.val() == 0){
                charter_min = 0 ;
            }else if(slider_left2.val() == 1){
                charter_min = 100 ;
            }else if(slider_left2.val() == 2){
                charter_min = 200 ;
            }else if(slider_left2.val() == 3){
                charter_min = 300 ;
            }else if(slider_left2.val() == 4){
                charter_min = 400 ;
            }else if(slider_left2.val() == 5){
                charter_min = 500 ;
            }else if(slider_left2.val() == 6){
                charter_min = 1000 ;
            }else if(slider_left2.val() == 7){
                charter_min = 1500 ;
            }else if(slider_left2.val() == 8){
                charter_min = 2000 ;
            }else if(slider_left2.val() == 9){
                charter_min = 2500 ;
            }else if(slider_left2.val() == 10){
                charter_min = 3000 ;
            }else if(slider_left2.val() == 11){
                charter_min = 3500 ;
            }else if(slider_left2.val() == 12){
                charter_min = 4000 ;
            }else if(slider_left2.val() == 13){
                charter_min = 4500 ;
            }else if(slider_left2.val() == 14){
                charter_min = 5000 ;
            }else if(slider_left2.val() == 15){
                charter_min = 5500 ;
            }else if(slider_left2.val() == 16){
                charter_min = 6000 ;
            }else if(slider_left2.val() == 17){
                charter_min = 6500 ;
            }else if(slider_left2.val() == 18){
                charter_min = 7000 ;
            }else if(slider_left2.val() == 19){
                charter_min = 8000 ;
            }else if(slider_left2.val() == 20){
                charter_min = 9000 ;
            }else if(slider_left2.val() == 21){
                charter_min = 10000;
            }else if(slider_left2.val() == 22){
                charter_min = 11000;
            }else if(slider_left2.val() == 23){
                charter_min = 12000;
            }else if(slider_left2.val() == 24){
                charter_min = 13000;
            }else if(slider_left2.val() == 25){
                charter_min = 14000;
            }else if(slider_left2.val() == 26){
                charter_min = 15000;
            }else if(slider_left2.val() == 27){
                charter_min = 16000;
            }else if(slider_left2.val() == 28){
                charter_min = 17000;
            }else if(slider_left2.val() == 29){
                charter_min = 18000;
            }else if(slider_left2.val() == 30){
                charter_min = 19000;
            }else if(slider_left2.val() == 31){
                charter_min = 20000;
            }else if(slider_left2.val() == 32){
                charter_min = 25000;
            }else if(slider_left2.val() == 33){
                charter_min = 30000;
            }else if(slider_left2.val() == 34){
                charter_min = 35000;
            }else if(slider_left2.val() == 35){
                charter_min = 40000;
            }else if(slider_left2.val() == 36){
                charter_min = 45000;
            }else if(slider_left2.val() == 37){
                charter_min = 50000;
            }else if(slider_left2.val() == 38){
                charter_min = 55000;
            }else if(slider_left2.val() == 39){
                charter_min = 60000;
            }else if(slider_left2.val() == 40){
                charter_min = 65000;
            }else if(slider_left2.val() == 41){
                charter_min = 70000;
            }else if(slider_left2.val() == 42){
                charter_min = 75000;
            }else if(slider_left2.val() == 43){
                charter_min = 80000;
            }else if(slider_left2.val() == 44){
                charter_min = 85000;
            }else if(slider_left2.val() == 45){
                charter_min = 90000;
            }else{
                charter_min = 10000000;
            }

            // 전세(보증금) 최댓값
            if (slider_right2.val() == 0){
                charter_max = 0 ;
            }else if(slider_right2.val() == 1){
                charter_max = 100 ;
            }else if(slider_right2.val() == 2){
                charter_max = 200 ;
            }else if(slider_right2.val() == 3){
                charter_max = 300 ;
            }else if(slider_right2.val() == 4){
                charter_max = 400 ;
            }else if(slider_right2.val() == 5){
                charter_max = 500 ;
            }else if(slider_right2.val() == 6){
                charter_max = 1000 ;
            }else if(slider_right2.val() == 7){
                charter_max = 1500 ;
            }else if(slider_right2.val() == 8){
                charter_max = 2000 ;
            }else if(slider_right2.val() == 9){
                charter_max = 2500 ;
            }else if(slider_right2.val() == 10){
                charter_max = 3000 ;
            }else if(slider_right2.val() == 11){
                charter_max = 3500 ;
            }else if(slider_right2.val() == 12){
                charter_max = 4000 ;
            }else if(slider_right2.val() == 13){
                charter_max = 4500 ;
            }else if(slider_right2.val() == 14){
                charter_max = 5000 ;
            }else if(slider_right2.val() == 15){
                charter_max = 5500 ;
            }else if(slider_right2.val() == 16){
                charter_max = 6000 ;
            }else if(slider_right2.val() == 17){
                charter_max = 6500 ;
            }else if(slider_right2.val() == 18){
                charter_max = 7000 ;
            }else if(slider_right2.val() == 19){
                charter_max = 8000 ;
            }else if(slider_right2.val() == 20){
                charter_max = 9000 ;
            }else if(slider_right2.val() == 21){
                charter_max = 10000;
            }else if(slider_right2.val() == 22){
                charter_max = 11000;
            }else if(slider_right2.val() == 23){
                charter_max = 12000;
            }else if(slider_right2.val() == 24){
                charter_max = 13000;
            }else if(slider_right2.val() == 25){
                charter_max = 14000;
            }else if(slider_right2.val() == 26){
                charter_max = 15000;
            }else if(slider_right2.val() == 27){
                charter_max = 16000;
            }else if(slider_right2.val() == 28){
                charter_max = 17000;
            }else if(slider_right2.val() == 29){
                charter_max = 18000;
            }else if(slider_right2.val() == 30){
                charter_max = 19000;
            }else if(slider_right2.val() == 31){
                charter_max = 20000;
            }else if(slider_right2.val() == 32){
                charter_max = 25000;
            }else if(slider_right2.val() == 33){
                charter_max = 30000;
            }else if(slider_right2.val() == 34){
                charter_max = 35000;
            }else if(slider_right2.val() == 35){
                charter_max = 40000;
            }else if(slider_right2.val() == 36){
                charter_max = 45000;
            }else if(slider_right2.val() == 37){
                charter_max = 50000;
            }else if(slider_right2.val() == 38){
                charter_max = 55000;
            }else if(slider_right2.val() == 39){
                charter_max = 60000;
            }else if(slider_right2.val() == 40){
                charter_max = 65000;
            }else if(slider_right2.val() == 41){
                charter_max = 70000;
            }else if(slider_right2.val() == 42){
                charter_max = 75000;
            }else if(slider_right2.val() == 43){
                charter_max = 80000;
            }else if(slider_right2.val() == 44){
                charter_max = 85000;
            }else if(slider_right2.val() == 45){
                charter_max = 90000;
            }else{
                charter_max = 10000000;
            }

            // 월세 최솟값
            if (slider_left.val() == 0){
                monthly_min = 0 ;
            }else if (slider_left.val() == 1){
                monthly_min = 5;
            }else if(slider_left.val() == 2){
                monthly_min = 10;
            }else if(slider_left.val() == 3){
                monthly_min = 15;
            }else if(slider_left.val() == 4){
                monthly_min = 20;
            }else if(slider_left.val() == 5){
                monthly_min = 25;
            }else if(slider_left.val() == 6){
                monthly_min = 30;
            }else if(slider_left.val() == 7){
                monthly_min = 35;
            }else if(slider_left.val() == 8){
                monthly_min = 40;
            }else if(slider_left.val() == 9){
                monthly_min = 45;
            }else if(slider_left.val() == 10){
                monthly_min = 50;
            }else if(slider_left.val() == 11){
                monthly_min = 55;
            }else if(slider_left.val() == 12){
                monthly_min = 60;
            }else if(slider_left.val() == 13){
                monthly_min = 65;
            }else if(slider_left.val() == 14){
                monthly_min = 70;
            }else if(slider_left.val() == 15){
                monthly_min = 75;
            }else if(slider_left.val() == 16){
                monthly_min = 80;
            }else if(slider_left.val() == 17){
                monthly_min = 85;
            }else if(slider_left.val() == 18){
                monthly_min = 90;
            }else if(slider_left.val() == 19){
                monthly_min = 95;
            }else if(slider_left.val() == 20){
                monthly_min = 100;
            }else if(slider_left.val() == 21){
                monthly_min = 110;
            }else if(slider_left.val() == 22){
                monthly_min = 120;
            }else if(slider_left.val() == 23){
                monthly_min = 130;
            }else if(slider_left.val() == 24){
                monthly_min = 140;
            }else if(slider_left.val() == 25){
                monthly_min = 150;
            }else if(slider_left.val() == 26){
                monthly_min = 160;
            }else if(slider_left.val() == 27){
                monthly_min = 170;
            }else if(slider_left.val() == 28){
                monthly_min = 180;
            }else if(slider_left.val() == 29){
                monthly_min = 190;
            }else if(slider_left.val() == 30){
                monthly_min = 200;
            }else if(slider_left.val() == 31){
                monthly_min = 250;
            }else if(slider_left.val() == 32){
                monthly_min = 300;
            }else{
                monthly_min = 10000000;
            }

            // 월세 최댓값
            if (slider_right.val() == 0){
                monthly_max = 0 ;
            }else if (slider_right.val() == 1){
                monthly_max = 5;
            }else if(slider_right.val() == 2){
                monthly_max = 10;
            }else if(slider_right.val() == 3){
                monthly_max = 15;
            }else if(slider_right.val() == 4){
                monthly_max = 20;
            }else if(slider_right.val() == 5){
                monthly_max = 25;
            }else if(slider_right.val() == 6){
                monthly_max = 30;
            }else if(slider_right.val() == 7){
                monthly_max = 35;
            }else if(slider_right.val() == 8){
                monthly_max = 40;
            }else if(slider_right.val() == 9){
                monthly_max = 45;
            }else if(slider_right.val() == 10){
                monthly_max = 50;
            }else if(slider_right.val() == 11){
                monthly_max = 55;
            }else if(slider_right.val() == 12){
                monthly_max = 60;
            }else if(slider_right.val() == 13){
                monthly_max = 65;
            }else if(slider_right.val() == 14){
                monthly_max = 70;
            }else if(slider_right.val() == 15){
                monthly_max = 75;
            }else if(slider_right.val() == 16){
                monthly_max = 80;
            }else if(slider_right.val() == 17){
                monthly_max = 85;
            }else if(slider_right.val() == 18){
                monthly_max = 90;
            }else if(slider_right.val() == 19){
                monthly_max = 95;
            }else if(slider_right.val() == 20){
                monthly_max = 100;
            }else if(slider_right.val() == 21){
                monthly_max = 110;
            }else if(slider_right.val() == 22){
                monthly_max = 120;
            }else if(slider_right.val() == 23){
                monthly_max = 130;
            }else if(slider_right.val() == 24){
                monthly_max = 140;
            }else if(slider_right.val() == 25){
                monthly_max = 150;
            }else if(slider_right.val() == 26){
                monthly_max = 160;
            }else if(slider_right.val() == 27){
                monthly_max = 170;
            }else if(slider_right.val() == 28){
                monthly_max = 180;
            }else if(slider_right.val() == 29){
                monthly_max = 190;
            }else if(slider_right.val() == 30){
                monthly_max = 200;
            }else if(slider_right.val() == 31){
                monthly_max = 250;
            }else if(slider_right.val() == 32){
                monthly_max = 300;
            }else{
                monthly_max = 10000000;
            }

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
                localStorage.setItem('charter_min', charter_min);
                localStorage.setItem('charter_max', charter_max);
                junwallse += 1;
            }
            if ($('#monthlyCheck').is(":checked")) {
                localStorage.setItem('charter_min', charter_min);
                localStorage.setItem('charter_max', charter_max);
                localStorage.setItem('monthly_min', monthly_min);
                localStorage.setItem('monthly_max', monthly_max);
                junwallse += 1;
            }
            localStorage.setItem('usr', usr_val);
            localStorage.setItem('junwallse', junwallse); 
            // alert(medical + security + shopping + market + leisure + convenient + oil + traffic + restaurant + park + charter_val + monthly_val + usr_val);
            // return confirm(medical+shopping+market+convenient+oil+leisure+park+traffic+restaurant);
            //submit 이벤트 작동안하도록 ..기본적인 이벤트 막아주는 함수,…preventDefault()
            // event.preventDefault();
            localStorage.setItem('choose_gu', company[0]);            
            localStorage.setItem('choose_dong', company[1]);

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
            $("#regionchoice").show();
            $("#submit").show();
        }); // 다음 버튼 누르면 매물조건
        $("#prebutton").click(function(){
            $("#next_sidebar").hide();
            $("#first_sidebar").show();
            $("#nextbutton").show();
            $("#prebutton").hide();
            $("#regionchoice").hide();
            $("#submit").hide();
        }); // 다음 버튼 누르면 매물조건
    });
    $('.btn_gu').click(function () {
        company.push($(this).val());
        $('#btn-gubox').hide();
        $('#btn-dongbox').empty();
        $('#btn-dongbox').show();
        show = $(this).val() + " > "
        $('#showregion').append(show);
        make_dong_btn($(this).val());

    })
    $('#btn-dongbox').on('click', '.btn_dong', function () {

        company.push($(this).val());
        show = $(this).val()
        $('#showregion_dong').html(show);

    })

    $('#reset').click(function () {
        $('#btn-gubox').show();
        $('#btn-dongbox').hide();
        $('#showregion').empty();
        $('#showregion_dong').empty();

        company = [];
    })
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
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

    
var temp = [];
var company = [];
var show = '';
var dong_temp1 = [];
var tp_dong = '';

var dong_dict = {};
var sortable = [];

var clusterdong = [
'동소문동5가',
'동소문동3가',
'동소문동1가',
'창동',
'방학동',
'쌍문동',
'도봉동'
]; //여기는 클러스터 결과 동들 넣어줘야함.
var real_dong = [];
var temp_gu = [];
var main_x = 0.0;
var main_y = 0.0;

var temp_dong2 = '';
// var dong_dict = {};
//var sortable = [];

function make_dong_btn(gu) {
    $.ajax({
        type: 'get',
        url: '/estates/getdong?jachigu=' + gu,
        dateType: 'json',
        success: function (jsonData) {
        // alert(jsonData.facil.subway)
        $.each(jsonData, function (index, item) {
            for (i = 0; i < item.length; i++) {
                temp.push(item[i].bubjung);
            } //for
            for (i = 0; i < temp.length; i++) {
                content = "<button type='button' class='btn_dong' value='" + temp[i] + "'><input type='radio' name='options' id='option" + (
                i + 1) + "'>" + temp[i] + "</button>";
                $('#btn-dongbox').append(content);
            }
                temp = [];
            }); //each
        }
    });
}

function make_dong_list(gu) {
for (inx = 0; inx < gu.length; inx++) {
    $.ajax({
        type: 'get',
        url: '/estates/getdong?jachigu=' + gu[inx],
        dateType: 'json',
        async: false,
        success: function (jsonData) {
            var dong_temp2 = [];
            $.each(jsonData, function (index, item) {
                for (i = 0; i < item.length; i++) {
                    dong_temp2.push(item[i].bubjung);
                } //for
                for (k = 0; k < dong_temp2.length; k++) {
                    dong_temp1.push(dong_temp2[k]);
                }
            }); //each
        }
    });
}
return dong_temp1
}
