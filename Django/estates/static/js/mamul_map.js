$('#mamulbar').show()

var x_positions = [];
var y_positions = [];
var dong_names = [];
var sum = [];
var sortable1 = [];
var temp = [];
var show = '';
var dong_temp1 = [];
var tp_dong = '';
var one_dong = '';
var two_dong = '';
var three_dong = '';
var four_dong = '';
var five_dong = '';
var dong_dict = {};
var sortable = [];
var cluster_num = -1;

var dong_cluster = []; //여기는 클러스터 결과 동들 넣어줘야함.
var real_dong = [];
var temp_gu = [];
var main_x = 0.0;
var main_y = 0.0;

var temp_dong2 = '';    

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.55811, 126.97406), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

$.getJSON(
    "http://127.0.0.1:8000/static/json/동시각화 전용.json",
    function (json) {
        var data = json;

        $.each(data, function (index, item) {
            x_positions.push(item.position_x);
            y_positions.push(item.position_y);
            dong_names.push(item.법정동명);
            sum.push(item.합계);
        }); //법정동 마커 찍기위해 좌표,법정동이름,합계 저장하기
        var customOverlay; // 오버레이
        var contentStr;

        for (var i = 0; i < y_positions.length; i++) {
            contentStr =
                "<div class='customoverlay' val='" +
                dong_names[i] +
                "'><p class='title'>" +
                sum[i] +
                "</p><div class = 'dong_' val='" +
                dong_names[i] +
                "'>" +
                dong_names[i] +
                "</p></div>";
            var customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: new kakao.maps.LatLng(x_positions[i], y_positions[i]),
                content: contentStr,
            });
            customOverlays.push(customOverlay);
            customOverlay.setMap(null);
        } //for문facilities_click_change
    }
); //동시각화 전용 getjson
function setMarkers(map) {
    for (var i = 0; i < customOverlays.length; i++) {
        customOverlays[i].setMap(map);
    }
}

var x_posi = [];
var y_posi = [];
var title = [];
var customOverlays = []; //커스텀 오버레이 저장할 배열
var map = new kakao.maps.Map(mapContainer, mapOption);
// 마커 클러스터러를 생성합니다
var markers = [];
var clusterer_junwallse = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 1, // 클러스터 할 최소 지도 레벨
    disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
}); // 월세 클러스터

var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 1, // 클러스터 할 최소 지도 레벨
    disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
}); // 전세 클러스터

function showMarkers() {
    setMarkers(map);

    $(".customoverlay").click(function () {
        facilities_click_change($(this).attr("val"));
    });
    $('#show_facil').hide()
    $('#hide_facil').show()
}

//    setMarkers(null);

function hideMarkers() {
    $('#hide_facil').hide()
    $('#show_facil').show()
    $('#sidebar').hide()
    $('#facilities').hide()
    $('#mamulbar').show()
    
    setMarkers(null);
}

var sortable_list = [one_dong, two_dong, three_dong, four_dong, five_dong];

function get_five_dong(){
    gu = localStorage.getItem('choose_gu');
    dong = localStorage.getItem('choose_dong');
    sortable1 = return_dong(gu, dong);
    // alert(sortable1);
    if (sortable1.length >= 5){
        one_dong = sortable1[0][0];
        two_dong = sortable1[1][0];
        three_dong = sortable1[2][0];
        four_dong = sortable1[3][0]; 
        five_dong = sortable1[4][0];
    }else{
        for (i = 0; i < sortable1.length; i++) {
            sortable_list[i] = sortable1[i][0];
            
    }
    one_dong = sortable_list[0];
    two_dong = sortable_list[1];
    three_dong = sortable_list[2];
    four_dong = sortable_list[3];
    five_dong = sortable_list[4];
    }
    
    $("#first").attr('value', one_dong);
    $("#first").append(one_dong)
    $("#second").attr('value', two_dong);
    $("#second").append(two_dong)
    $("#third").attr('value', three_dong);
    $("#third").append(three_dong)
    $("#fourth").attr('value', four_dong);
    $("#fourth").append(four_dong)
    $("#fifth").attr('value', five_dong);
    $("#fifth").append(five_dong)

// alert(one_dong);
// alert(two_dong);
}


$(function () {
    getvalue();
    get_five_dong();
    getval();
    
    localStorage.clear();
});

function getval() {
    var bozeong_min = localStorage.getItem("charter_min"); //aaa,sss,3000
    var bozeong_max = localStorage.getItem("charter_max"); //aaa,sss,3000
    var wallse_min = localStorage.getItem("monthly_min");
    var wallse_max = localStorage.getItem("monthly_max");
    var junwallse = localStorage.getItem("junwallse");
    // alert(bozeong);

    if (junwallse == 2) {
        make_junwallse_filter_cluster(bozeong_min, bozeong_max, wallse_min, wallse_max, one_dong, two_dong, three_dong, four_dong, five_dong);
    }
    else {
        if (wallse_min) {
            console.log('월세')
            return make_wallse_filter_cluster(bozeong_min, bozeong_max, wallse_min, wallse_max, one_dong, two_dong, three_dong, four_dong, five_dong);
        } else {
            console.log('전세')
            return make_bozeong_filter_cluster(bozeong_min, bozeong_max, one_dong, two_dong, three_dong, four_dong, five_dong);
        }
    }
} // getval
function make_bozeong_filter_cluster(bozeong_min, bozeong_max, one_dong, two_dong, three_dong, four_dong, five_dong) {
    let params = {
        bozeong_min: bozeong_min,
        bozeong_max: bozeong_max,
        one_dong : one_dong,
        two_dong : two_dong,
        three_dong : three_dong,
        four_dong : four_dong,
        five_dong : five_dong
    };
    $.ajax({
        type: "POST",
        headers: {
            "X-CSRFTOKEN": "{{ csrf_token }}",
        },
        url: "/estates/getbozeonglatlng",
        data: JSON.stringify(params),
        dateType: "json",
        success: function (jsonData) {
            $.each(jsonData, function (index, item) {
                // alert(item.length);
                // alert(item[0].x);
                for (i = 0; i < item.length; i++) {
                    x_posi.push(item[i].x);
                    y_posi.push(item[i].y);
                    title.push(item[i].id);
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    var imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                    // 마커 이미지를 생성합니다
                    var markerImage = new kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize
                    );

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(x_posi[i], y_posi[i]), // 마커를 표시할 위치
                        //title : positions[i].title,  마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        //image : markerImage,  마커 이미지
                        title: title[i],
                    }); //마커
                    kakao.maps.event.addListener(marker, "click", function () {
                        $('#mamuldiv').show()
                        mamul_click_marker(this);
                    });
                    markers.push(marker);
                } //for문
                clusterer.addMarkers(markers);

                // 클러스터러에 마커들을 추가합니다
                //clusterer.addMarkers(marker);
                //kakao.maps.event.addListener(marker, "click", function (){
                //});
            }); //each문
            // 마커 이미지의 이미지 주소입니다
            // 마커 클러스터러에 클릭이벤트를 등록합니다
            // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
            // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
            kakao.maps.event.addListener(
                clusterer,
                "clusterclick",
                function (cluster) {
                    $('#mamuldiv').show()
                    mamul_click_info(cluster);
                }
            );
        }, // for문
    }); // each문  ajax
} //success    make filter cluster

function make_wallse_filter_cluster(bozeong_min, bozeong_max, wallse_min, wallse_max, one_dong, two_dong, three_dong, four_dong, five_dong) {
    let params = {
        bozeong_min: bozeong_min,
        bozeong_max: bozeong_max,
        wallse_min: wallse_min,
        wallse_max: wallse_max,
        one_dong : one_dong,
        two_dong : two_dong,
        three_dong : three_dong,
        four_dong : four_dong,
        five_dong : five_dong
    };
    $.ajax({
        type: "POST",
        headers: {
            "X-CSRFTOKEN": "{{ csrf_token }}",
        },
        url: "/estates/getwallselatlng",
        data: JSON.stringify(params),
        dateType: "json",
        success: function (jsonData) {
            $.each(jsonData, function (index, item) {
                // alert(item.length);
                // alert(item[0].x);
                markers = [];
                for (i = 0; i < item.length; i++) {
                    x_posi.push(item[i].x);
                    y_posi.push(item[i].y);
                    title.push(item[i].id);
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    var imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                    // 마커 이미지를 생성합니다
                    var markerImage = new kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize
                    );

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(x_posi[i], y_posi[i]), // 마커를 표시할 위치
                        //title : positions[i].title,  마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        //image : markerImage,  마커 이미지
                        title: title[i],
                    }); //마커
                    kakao.maps.event.addListener(marker, "click", function () {
                        $('#mamuldiv').show()
                        mamul_click_marker(this);
                    });
                    markers.push(marker);
                } //for문
                clusterer.addMarkers(markers);

                // 클러스터러에 마커들을 추가합니다
                //clusterer.addMarkers(marker);
                //kakao.maps.event.addListener(marker, "click", function (){
                //});
            }); //each문
            // 마커 이미지의 이미지 주소입니다
            // 마커 클러스터러에 클릭이벤트를 등록합니다
            // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
            // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
            kakao.maps.event.addListener(
                clusterer,
                "clusterclick",
                function (cluster) {
                    $('#mamuldiv').show()
                    mamul_click_info(cluster);
                    
                }
            );
        }, // for문
    }); // each문  ajax
} //success    make wallse filter cluster

function make_junwallse_filter_cluster(bozeong_min, bozeong_max, wallse_min, wallse_max, one_dong, two_dong, three_dong, four_dong, five_dong) {
    let params = {
        bozeong_min: bozeong_min,
        bozeong_max: bozeong_max,
        wallse_min: wallse_min,
        wallse_max: wallse_max,
        one_dong : one_dong,
        two_dong : two_dong,
        three_dong : three_dong,
        four_dong : four_dong,
        five_dong : five_dong
    };
    $.ajax({
        type: "POST",
        headers: {
            "X-CSRFTOKEN": "{{ csrf_token }}",
        },
        url: "/estates/getjunwallselatlng",
        data: JSON.stringify(params),
        dateType: "json",
        success: function (jsonData) {
            $.each(jsonData, function (index, item) {
                // alert(item.length);
                // alert(item[0].x);
                
                for (i = 0; i < item.length; i++) {

                    x_posi.push(item[i].x);
                    y_posi.push(item[i].y);
                    title.push(item[i].id);
                    
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    var imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                    // 마커 이미지를 생성합니다
                    var markerImage = new kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize
                    );

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(x_posi[i], y_posi[i]), // 마커를 표시할 위치
                        //title : positions[i].title,  마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        //image : markerImage,  마커 이미지
                        title: title[i],
                    }); //마커
                    kakao.maps.event.addListener(marker, "click", function () {
                        $('#mamuldiv').show()
                        mamul_click_marker(this);
                    });
                    markers.push(marker);
                } //for문
                clusterer_junwallse.addMarkers(markers);

                // 클러스터러에 마커들을 추가합니다
                //clusterer.addMarkers(marker);
                //kakao.maps.event.addListener(marker, "click", function (){
                //});
            }); //each문
            // 마커 이미지의 이미지 주소입니다
            // 마커 클러스터러에 클릭이벤트를 등록합니다
            // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
            // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
            kakao.maps.event.addListener(
                clusterer_junwallse,
                "clusterclick",
                function (cluster) {
                        $('#mamuldiv').show()
                        junwallse_mamul_click_info(cluster);
                    
                }
            );
        }, // for문
    }); // each문  ajax
} //success    make wallse filter cluster

function getvalue(){
    var input_data = [];

    var medical = localStorage.getItem('Range_medical');
    var facility = localStorage.getItem('Range_facility');
    var shopping = localStorage.getItem('Range_shopping');
    var market = localStorage.getItem('Range_market');
    var leisure = localStorage.getItem('Range_leisure');
    var convenient = localStorage.getItem('Range_convenient');
    var cafe = localStorage.getItem('Range_cafe');
    var traffic = localStorage.getItem('Range_traffic');
    var restaurant = localStorage.getItem('Range_restaurant');
    var fastfood = localStorage.getItem('Range_fastfood');
    input_data.push(medical)
    input_data.push(facility)
    input_data.push(convenient)
    input_data.push(leisure)
    input_data.push(traffic)
    input_data.push(restaurant)
    input_data.push(cafe)
    input_data.push(fastfood)
    input_data.push(shopping)
    input_data.push(market)

    // alert(input_data)
    //return convert_pca(input_data);
    return convert_pca(medical,facility,shopping,market,leisure,convenient,cafe,traffic,restaurant,fastfood);
};

function convert_pca(medical,facility,shopping,market,leisure,convenient,cafe,traffic,restaurant,fastfood){
    //alert(security);
    let params = {
        'medical' : medical,
        'facility' :facility,
        'convenient' : convenient,
        'leisure' : leisure,
        'restaurant' : restaurant,
        'traffic' : traffic,
        'fastfood' : fastfood,
        'cafe' : cafe,
        'market' : market,
        'shopping' : shopping,
    }
    $.ajax({
        type:'POST',
        headers : {
        'X-CSRFTOKEN' : '{{ csrf_token }}'
        },
        //url: '/estates/pca?medical='+medical+'&security='+security+'&shopping='+shopping+'&market='+market+'&leisure='+leisure,
        async : false,
        url: '/estates/pca',
        data: JSON.stringify(params),
        dateType:'json',

        success: function(result) {
        //console.log(result);
            $.each(result, function(index,item){
                cluster_num = item;
                // alert(cluster_num);
                cluster_dong(cluster_num);
            }) //each
        },//success
    });//ajax
}; //convert_pca

function cluster_dong(cluster_num) {
        $.ajax({
            type: 'get',
            url: '/estates/getclusterdong?cluster_num=' + cluster_num,
            dateType: 'json',
            async: false,
            success: function (jsonData) {
                $.each(jsonData, function (index, item) {
                    for (i = 0; i < item.length; i++) {
                        dong_cluster.push(item[i].dong);
                    }

                }); //each
            } // success
    }); //ajax
} // func cluster_dong



function return_dong(gu, dong) {

    if (gu == "도봉구") {
        temp_gu = ['강북구', '노원구', '도봉구'];
    } else if (gu == "노원구") {
        temp_gu = ['중랑구', '노원구', '도봉구'];
    } else if (gu == "중랑구") {
        temp_gu = ['중랑구', '노원구', '성북구', '동대문구', '광진구'];
    } else if (gu == "강북구") {
        temp_gu = ['강북구', '노원구', '도봉구', '성북구'];
    } else if (gu == "노원구") {
        temp_gu = ['중랑구', '노원구', '도봉구'];
    } else if (gu == "성북구") {
        temp_gu = [
        '종로구',
        '성북구',
        '동대문구',
        '중랑구',
        '노원구',
        '강북구'
        ];
    } else if (gu == "은평구") {
        temp_gu = ['은평구', '종로구', '서대문구', '마포구'];
    } else if (gu == "서대문구") {
        temp_gu = [
        '서대문구',
        '은평구',
        '마포구',
        '종로구',
        '중구',
        '용산구'
        ];
    } else if (gu == "종로구") {
        temp_gu = ['은평구', '종로구', '서대문구', '성북구', '중구'];
    } else if (gu == "동대문구") {
        temp_gu = [
        '성북구',
        '중랑구',
        '광진구',
        '성동구',
        '동대문구',
        '노원구'
        ];
    } else if (gu == "마포구") {
        temp_gu = [
        '마포구',
        '서대문구',
        '중구',
        '용산구',
        '영등포구',
        '양천구'
        ];
    } else if (gu == "중구") {
        temp_gu = [
        '중구',
        '종로구',
        '서대문구',
        '마포구',
        '용산구',
        '성동구',
        '동대문구',
        '성북구'
        ];
    } else if (gu == "성동구") {
        temp_gu = [
        '성동구',
        '동대문구',
        '성북구',
        '종로구',
        '중구',
        '용산구',
        '강남구',
        '송파구',
        '광진구',
        '중랑구'
        ];
    } else if (gu == "광진구") {
        temp_gu = [
        '광진구',
        '중랑구',
        '동대문구',
        '성동구',
        '강남구',
        '송파구',
        '강동구'
        ];
    } else if (gu == "강동구") {
        temp_gu = ['광진구', '강동구', '송파구'];
    } else if (gu == "강서구") {
        temp_gu = ['강서구', '마포구', '양천구', '영등포구'];
    } else if (gu == "양천구") {
        temp_gu = ['양천구', '강서구', '영등포구', '구로구', '마포구'];
    } else if (gu == "영등포구") {
        temp_gu = [
        '영등포구',
        '마포구',
        '용산구',
        '동작구',
        '관악구',
        '금천구',
        '구로구',
        '양천구'
        ];
    } else if (gu == "동작구") {
        temp_gu = [
        '동작구',
        '영등포구',
        '용산구',
        '서초구',
        '관악구',
        '금천구',
        '구로구'
        ];
    } else if (gu == "서초구") {
        temp_gu = [
        '서초구',
        '관악구',
        '동작구',
        '용산구',
        '강남구',
        '성동구'
        ];
    } else if (gu == "강남구") {
        temp_gu = [
        '강남구',
        '서초구',
        '용산구',
        '성동구',
        '광진구',
        '송파구',
        '중구'
        ];
    } else if (gu == "송파구") {
        temp_gu = ['송파구', '강남구', '성동구', '광진구', '강동구'];
    } else if (gu == "금천구") {
        temp_gu = ['금천구', '구로구', '영등포구', '동작구', '관악구'];
    } else if (gu == "구로구") {
        temp_gu = [
        '구로구',
        '양천구',
        '영등포구',
        '동작구',
        '관악구',
        '금천구'
        ];
    } else if (gu == "관악구") {
        temp_gu = [
        '관악구',
        '동작구',
        '영등포구',
        '구로구',
        '금천구',
        '서초구'
        ];
    }

    var temp_dong = make_dong_list(temp_gu); //여기에 주변 구의 동들 다 저장 되어있음.
    //alert(temp_dong);
    for (i = 0; i < temp_dong.length; i++) {
        for (j = 0; j < dong_cluster.length; j++) {
            if (temp_dong[i] == dong_cluster[j]) {
                real_dong.push(temp_dong[i]);
                break;
            }
        }
    } // 여기까지 거리잴 동들 real_dong에 저장완료 기준(선택한)동 dong, 모델이 골라준 동 real_dong리스트
    // 이제 여기서 부터 real_dong과 dong의 좌표값들 다 가져와 주면 됨.
    $.ajax({
        type: 'get',
        url: '/estates/getmain_xy?dong=' + dong,
        dateType: 'json',
        async: false,
        success: function (jsonData) {
        main_x = jsonData.mainxy.position_x
        main_y = jsonData.mainxy.position_y

        }
    }); //main x,y
    //alert(main_x);
    for (i = 0; i < real_dong.length; i++) {
        temp_dong2 = real_dong[i];
        $.ajax({
            type: 'get',
            url: '/estates/getdong_xy?dong=' + temp_dong2,
            dateType: 'json',
            async: false,
            success: function (jsonData) {

                dong_x = jsonData.mainxy.position_x
                dong_y = jsonData.mainxy.position_y
                dong_dict[real_dong[i]] = ((main_x - dong_x) ** 2 + (main_y - dong_y) ** 2) * 1000;
            }
        });
    }
    for (var dongdong in dong_dict) {
        sortable.push([
        dongdong, dong_dict[dongdong]
        ]);
    }

    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    return (sortable);
}

function return_list (){
    $('#rank_dong').show()
    $('#mamuldiv').hide()
    var level = 8;
    map.setLevel(level, {
        center: new kakao.maps.LatLng(37.55811, 126.97406),
        animate: {
            duration: 500,
        },
    });
}


function first_click() {
    $('#rank_dong').hide()
    var level = 5;
    var a, b;
    $.getJSON(
        "http://127.0.0.1:8000/static/json/동시각화 전용.json",
        function (json) {
            var data = json;
            $.each(data, function (index, item) {
                if (item.법정동명 == $('#first').val()) {
                    a = item.position_x;
                    b = item.position_y;
                }
            }); //each
            map.setLevel(level, {
                anchor: new kakao.maps.LatLng(a, b),
                animate: {
                    duration: 500,
                },
            });
        }
    );
}

function second_click() {
    $('#rank_dong').hide()
    var level = 5;
    var a, b;
    $.getJSON(
        "http://127.0.0.1:8000/static/json/동시각화 전용.json",
        function (json) {
            var data = json;
            $.each(data, function (index, item) {
                if (item.법정동명 == $('#second').val()) {
                    a = item.position_x;
                    b = item.position_y;
                }
            }); //each
            map.setLevel(level, {
                anchor: new kakao.maps.LatLng(a, b),
                animate: {
                    duration: 500,
                },
            });
        }
    );
}

function third_click() {
    $('#rank_dong').hide()
    var level = 5;
    var a, b;
    $.getJSON(
        "http://127.0.0.1:8000/static/json/동시각화 전용.json",
        function (json) {
            var data = json;
            $.each(data, function (index, item) {
                if (item.법정동명 == $('#third').val()) {
                    a = item.position_x;
                    b = item.position_y;
                }
            }); //each
            map.setLevel(level, {
                anchor: new kakao.maps.LatLng(a, b),
                animate: {
                    duration: 500,
                },
            });
        }
    );
}

function fourth_click() {
    $('#rank_dong').hide()
    var level = 5;
    var a, b;
    $.getJSON(
        "http://127.0.0.1:8000/static/json/동시각화 전용.json",
        function (json) {
            var data = json;
            $.each(data, function (index, item) {
                if (item.법정동명 == $('#fourth').val()) {
                    a = item.position_x;
                    b = item.position_y;
                }
            }); //each
            map.setLevel(level, {
                anchor: new kakao.maps.LatLng(a, b),
                animate: {
                    duration: 500,
                },
            });
        }
    );
}

function fifth_click() {
    $('#rank_dong').hide()
    var level = 5;
    var a, b;
    $.getJSON(
        "http://127.0.0.1:8000/static/json/동시각화 전용.json",
        function (json) {
            var data = json;
            $.each(data, function (index, item) {
                if (item.법정동명 == $('#fifth').val()) {
                    a = item.position_x;
                    b = item.position_y;
                }
            }); //each
            map.setLevel(level, {
                anchor: new kakao.maps.LatLng(a, b),
                animate: {
                    duration: 500,
                },
            });
        }
    );
}

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, "zoom_changed", function () {
    // 지도의 현재 레벨을 얻어옵니다
    var level = map.getLevel();
});