$(function () {
    var frm = document.getElementById('frm');
    frm.addEventListener('click', function () {
        //1. 폼에 입력된 값을 다 가지고 ACTION에 연결된 페이지로 이동, 전송…하는 함수
        $("#frm").submit(function (event) {
            //2. 편의시설에 입력된 값을 각각의 변수에 할당…id에 맞춰서
            //  alert 창으로 값 확인…폼 초기화, password
            var medical = $("#Range_medical").val();
            var security = $("#Range_security").val();
            var shopping = $("#Range_shopping").val();
            var market = $("#Range_market").val();
            var leisure = $("#Range_leisure").val();
            var convenient = $("#Range_convenient").val();
            var oil = $("#Range_oil").val();
            var traffic = $("#Range_traffic").val();
            var restaurant = $("#Range_restaurant").val();
            var park = $("#Range_park").val();
            var charter_val = $("#charter_select").val();
            var monthly_val = $("#monthly_select").val();
            var usr_val = $("#usr").val();
            var junwallse = 0;
            //로컬 스토리지에 넣음
            localStorage.setItem('Range_medical', medical);
            localStorage.setItem('Range_security', security);
            localStorage.setItem('Range_shopping', shopping);
            localStorage.setItem('Range_market', market);
            localStorage.setItem('Range_leisure', leisure);
            localStorage.setItem('Range_convenient', convenient);
            localStorage.setItem('Range_oil', oil);
            localStorage.setItem('Range_traffic', traffic);
            localStorage.setItem('Range_restaurant', restaurant);
            localStorage.setItem('Range_park', park);
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
            } else {
                if ($("#monthlyCheck").is(":checked")) {
                    
                }
                else {
                    $("#charter").hide();
                }
            }
        }); // 전세 클릭시 가격창

        $("#monthlyCheck").click(function () {
            if ($(this).is(":checked")) {
                $("#monthly").show();
                $("#charter").show();
            } else {
                if ($('#charterCheck').is(":checked")){
                    $("#monthly").hide();
                }
                else {
                    $("#monthly").hide();
                    $("#charter").hide();
                }
            }
        }); // 월세 클릭시 가격창
    });
});

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