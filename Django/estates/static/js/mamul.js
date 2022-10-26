function mamul_click_marker(mark) {
    $("#mamuldiv").empty();
    $("#mamulbar").show();
    $("#facilities").hide();
    var myeong1 = "";
    var myeong2 = "";
    var myeong3 = "";
    var myeong4 = "";
    var myeong5 = "";
    var myeong6 = "";
    
    var myeong_1="";
    var myeong_2="";

    var junse="";

    var ggul="";

    var pk = mark.Gb;
    $.ajax({
        type: "get",
        url: "/estates/getmamuls?pk=" + pk,
        dateType: "json",
        async: false,
            success: function (jsonData) {
                var img1;
                if(jsonData.mamuls.gunmulyongdo == "아파트"){
                    if(myeong1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                        myeong1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (myeong2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                        myeong2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (myeong3=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                        myeong3 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong3){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (myeong4=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                        myeong4 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong4){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) &(myeong5=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                        myeong5 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong5){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) & (jsonData.mamuls.gunmullmyeong != myeong5) & (myeong6=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                        myeong6 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong6){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                    }
                    else{
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16134/MTYxMzQ0NzM4Njcy.jpg'>";
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "오피스텔"){
                    if(myeong_1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                        myeong_1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong_1) & (myeong_2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                        myeong_2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                    }
                    else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/18706/MTg3MDYxMDAxODQ1Mjcy.jpg'>"
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "연립다세대"){
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/42385226/wm_638023091035441892_14740641_20226914220.jpg'>"
                }
                else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/neonet/property/photo/psaleserno/41301743/2210_12_1665566891469674.jpg'>"
                }

                if(jsonData.mamuls.junwallse == "전세"){
                    junse = "<span class = 'junwallse'>"
                    if(jsonData.mamuls.predict.toFixed(1)> jsonData.mamuls.bozeonggum){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }
                else{ //월세일때
                    junse = "<span class = 'junwallse1'>"
                    if(jsonData.mamuls.predict.toFixed(1) > jsonData.mamuls.imdaeru){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }

                
                $("#mamuldiv").append(
                    "<div class ='listname'>" +
                    "<span class = 'gunmulyongdo'>" +
                    jsonData.mamuls.gunmulyongdo +
                    "</span>" +
                    "<span class = 'gunmullmyeong'>" +
                    jsonData.mamuls.gunmullmyeong +
                    "</span>" +
                    "<span class = 'jachigu'>" +
                    jsonData.mamuls.jachigu +
                    "</span>" +
                    "<span class = 'bubjung'>" +
                    jsonData.mamuls.bubjung +
                    "</span>" +
                    "</div>" +
                    "<div class ='info_left'>" +
                    "<div class= 'listprice'>" +
                    junse +
                    jsonData.mamuls.junwallse +
                    "</span>" +
                    "<span class = 'price'>" +
                    jsonData.mamuls.bozeonggum +
                    "/" +
                    jsonData.mamuls.imdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listinfo'>" +
                    "<span class = 'height'>" +
                    jsonData.mamuls.height +
                    "층 /</span>" +
                    "<span class = 'pyeong'>" +
                    jsonData.mamuls.pyeong +
                    "㎡ /</span>" +
                    "<span class = 'gunchukyear'>" +
                    jsonData.mamuls.gunchukyear +
                    "(건축년도) <br></span>" +
                    "<span class = 'lastbozeong'>" +
                    "종전보증금: " +
                    jsonData.mamuls.lastbozeong +
                    "</span>" +
                    "<span class = 'lastimdaeru'>" +
                    "종전 임대료:" +
                    jsonData.mamuls.lastimdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listpredict'>" +
                    "<span class='label kb'><em>KB</em>AI예측시세</span>" +
                    "<span class = 'predict'> " +
                    jsonData.mamuls.predict.toFixed(1) +
                    "만</span>" +
                    ggul + 
                    "</div>" +
                    "</div>" +
                    "<div class = 'info_right'>" +
                    img1 +
                    "</div>" + "<br>" + "<hr>"
                );
            }, //callback
        }); //ajax
} //facilities_click_info
function mamul_click_info(mamul_detail) {
    $("#mamuldiv").empty();
    $("#mamulbar").show();
    $("#facilities").hide();
    var mamul_list = [];
    var myeong1 = "";
    var myeong2 = "";
    var myeong3 = "";
    var myeong4 = "";
    var myeong5 = "";
    var myeong6 = "";
    
    var myeong_1="";
    var myeong_2="";

    var junse="";

    var ggul="";
    for (i = 0; i < mamul_detail._markers.length; i++) {
        mamul_list.push(mamul_detail._markers[i].Gb + " ");
    }
    for (i = 0; i < mamul_detail._markers.length; i++) {
        $.ajax({
            type: "get",
            url: "/estates/getmamuls?pk=" + mamul_list[i],
            dateType: "json",
            async: false,
            success: function (jsonData) {
                var img1;
                if(jsonData.mamuls.gunmulyongdo == "아파트"){
                    if(myeong1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                        myeong1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (myeong2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                        myeong2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (myeong3=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                        myeong3 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong3){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (myeong4=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                        myeong4 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong4){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) &(myeong5=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                        myeong5 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong5){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) & (jsonData.mamuls.gunmullmyeong != myeong5) & (myeong6=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                        myeong6 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong6){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                    }
                    else{
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16134/MTYxMzQ0NzM4Njcy.jpg'>";
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "오피스텔"){
                    if(myeong_1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                        myeong_1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong_1) & (myeong_2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                        myeong_2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                    }
                    else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/18706/MTg3MDYxMDAxODQ1Mjcy.jpg'>"
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "연립다세대"){
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/42385226/wm_638023091035441892_14740641_20226914220.jpg'>"
                }
                else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/neonet/property/photo/psaleserno/41301743/2210_12_1665566891469674.jpg'>"
                }

                if(jsonData.mamuls.junwallse == "전세"){
                    junse = "<span class = 'junwallse'>"
                    if(jsonData.mamuls.predict.toFixed(1)> jsonData.mamuls.bozeonggum){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }
                else{ //월세일때
                    junse = "<span class = 'junwallse1'>"
                    if(jsonData.mamuls.predict.toFixed(1) > jsonData.mamuls.imdaeru){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }

                
                $("#mamuldiv").append(
                    "<div class ='listname'>" +
                    "<span class = 'gunmulyongdo'>" +
                    jsonData.mamuls.gunmulyongdo +
                    "</span>" +
                    "<span class = 'gunmullmyeong'>" +
                    jsonData.mamuls.gunmullmyeong +
                    "</span>" +
                    "<span class = 'jachigu'>" +
                    jsonData.mamuls.jachigu +
                    "</span>" +
                    "<span class = 'bubjung'>" +
                    jsonData.mamuls.bubjung +
                    "</span>" +
                    "</div>" +
                    "<div class ='info_left'>" +
                    "<div class= 'listprice'>" +
                    junse +
                    jsonData.mamuls.junwallse +
                    "</span>" +
                    "<span class = 'price'>" +
                    jsonData.mamuls.bozeonggum +
                    "/" +
                    jsonData.mamuls.imdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listinfo'>" +
                    "<span class = 'height'>" +
                    jsonData.mamuls.height +
                    "층 /</span>" +
                    "<span class = 'pyeong'>" +
                    jsonData.mamuls.pyeong +
                    "㎡ /</span>" +
                    "<span class = 'gunchukyear'>" +
                    jsonData.mamuls.gunchukyear +
                    "(건축년도) <br></span>" +
                    "<span class = 'lastbozeong'>" +
                    "종전보증금: " +
                    jsonData.mamuls.lastbozeong +
                    "</span>" +
                    "<span class = 'lastimdaeru'>" +
                    "종전 임대료:" +
                    jsonData.mamuls.lastimdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listpredict'>" +
                    "<span class='label kb'><em>KB</em>AI예측시세</span>" +
                    "<span class = 'predict'> " +
                    jsonData.mamuls.predict.toFixed(1) +
                    "만</span>" +
                    ggul + 
                    "</div>" +
                    "</div>" +
                    "<div class = 'info_right'>" +
                    img1 +
                    "</div>" + "<br>" + "<hr>"
                );
            }, //callback
        }); //ajax
    } //for
} //facilities_click_info

function junwallse_mamul_click_info(mamul_detail) {
    $("#mamuldiv").empty();
    $("#mamulbar").show();
    $("#facilities").hide();

    var mamul_list = [];
    var myeong1 = "";
    var myeong2 = "";
    var myeong3 = "";
    var myeong4 = "";
    var myeong5 = "";
    var myeong6 = "";
    
    var myeong_1="";
    var myeong_2="";

    var junse="";

    var ggul="";

    var mamul_list = [];
    for (i = 0; i < mamul_detail._markers.length; i++) {
        mamul_list.push(mamul_detail._markers[i].Gb + " ");
    }
    for (i = 0; i < mamul_detail._markers.length; i++) {
        $.ajax({
            type: "get",
            url: "/estates/getmamuls?pk=" + mamul_list[i],
            dateType: "json",
            async: false,
            success: function (jsonData) {
                var img1;
                if(jsonData.mamuls.gunmulyongdo == "아파트"){
                    if(myeong1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                        myeong1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/25259/20210124/a36a96b692b37c74.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (myeong2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                        myeong2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1452904/20220204/8e761c3418a7c9eb.jpeg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (myeong3=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                        myeong3 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong3){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/25402/MjU0MDIxMDAxMzA4NTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (myeong4=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                        myeong4 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong4){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16938/MTY5Mzg0Nzc4Mzcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) &(myeong5=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                        myeong5 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong5){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/32448/MzI0NDgxMDAxMjA5OTcy.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong1) & (jsonData.mamuls.gunmullmyeong != myeong2) & (jsonData.mamuls.gunmullmyeong != myeong3) & (jsonData.mamuls.gunmullmyeong != myeong4) & (jsonData.mamuls.gunmullmyeong != myeong5) & (myeong6=="") ){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                        myeong6 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong6){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/17537/MTc1MzcxMDAwMjcyODcy.jpg'>";
                    }
                    else{
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/16134/MTYxMzQ0NzM4Njcy.jpg'>";
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "오피스텔"){
                    if(myeong_1 == ""){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                        myeong_1 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_1){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/mk/property/photo/psaleserno/39388740/prh_이안건물사진.jpg'>";
                    }
                    else if((jsonData.mamuls.gunmullmyeong != myeong_1) & (myeong_2=="")){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                        myeong_2 = jsonData.mamuls.gunmullmyeong;
                    }
                    else if(jsonData.mamuls.gunmullmyeong == myeong_2){
                        img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/39736521/wm_638004953759389007_14613216_202210415475410.jpg'>";
                    }
                    else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/kms/complex/photo/objctidnfr/18706/MTg3MDYxMDAxODQ1Mjcy.jpg'>"
                    }
                }
                else if(jsonData.mamuls.gunmulyongdo == "연립다세대"){
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/serve/property/photo/psaleserno/42385226/wm_638023091035441892_14740641_20226914220.jpg'>"
                }
                else{
                    img1 = "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/alian/neonet/property/photo/psaleserno/41301743/2210_12_1665566891469674.jpg'>"
                }

                if(jsonData.mamuls.junwallse == "전세"){
                    junse = "<span class = 'junwallse'>"
                    if(jsonData.mamuls.predict.toFixed(1)> jsonData.mamuls.bozeonggum){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }
                else{ //월세일때
                    junse = "<span class = 'junwallse1'>"
                    if(jsonData.mamuls.predict.toFixed(1) > jsonData.mamuls.imdaeru){
                        ggul = "<span class = 'predict_result'> 꿀매물</span>";
                    }
                    else{
                        ggul = "";
                    }
                }

                
                $("#mamuldiv").append(
                    "<div class ='listname'>" +
                    "<span class = 'gunmulyongdo'>" +
                    jsonData.mamuls.gunmulyongdo +
                    "</span>" +
                    "<span class = 'gunmullmyeong'>" +
                    jsonData.mamuls.gunmullmyeong +
                    "</span>" +
                    "<span class = 'jachigu'>" +
                    jsonData.mamuls.jachigu +
                    "</span>" +
                    "<span class = 'bubjung'>" +
                    jsonData.mamuls.bubjung +
                    "</span>" +
                    "</div>" +
                    "<div class ='info_left'>" +
                    "<div class= 'listprice'>" +
                    junse +
                    jsonData.mamuls.junwallse +
                    "</span>" +
                    "<span class = 'price'>" +
                    jsonData.mamuls.bozeonggum +
                    "/" +
                    jsonData.mamuls.imdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listinfo'>" +
                    "<span class = 'height'>" +
                    jsonData.mamuls.height +
                    "층 /</span>" +
                    "<span class = 'pyeong'>" +
                    jsonData.mamuls.pyeong +
                    "㎡ /</span>" +
                    "<span class = 'gunchukyear'>" +
                    jsonData.mamuls.gunchukyear +
                    "(건축년도) <br></span>" +
                    "<span class = 'lastbozeong'>" +
                    "종전보증금: " +
                    jsonData.mamuls.lastbozeong +
                    "</span>" +
                    "<span class = 'lastimdaeru'>" +
                    "종전 임대료:" +
                    jsonData.mamuls.lastimdaeru +
                    "</span>" +
                    "</div>" +
                    "<div class= 'listpredict'>" +
                    "<span class='label kb'><em>KB</em>AI예측시세</span>" +
                    "<span class = 'predict'> " +
                    jsonData.mamuls.predict.toFixed(1) +
                    "만</span>" +
                    ggul + 
                    "</div>" +
                    "</div>" +
                    "<div class = 'info_right'>" +
                    img1 +
                    "</div>" + "<br>" + "<hr>"
                );
            }, //callback
        }); //ajax
    } //for
} //facilities_click_info

function home() {
    location.href ='index';
}

// function return_list (){
//     $('#rank_dong').show()
//     $('#mamuldiv').hide()
// }