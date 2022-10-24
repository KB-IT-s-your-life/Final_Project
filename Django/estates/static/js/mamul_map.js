var x_positions = [];
var y_positions = [];
var dong_names = [];
var sum = [];

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.55811, 126.97406), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

$.getJSON(
    "http://localhost:8000/static/json/동시각화 전용.json",
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
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 1, // 클러스터 할 최소 지도 레벨
    disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
}); // 클러스터

function showMarkers() {
    setMarkers(map);

    $(".customoverlay").click(function () {
        facilities_click_change($(this).attr("val"));
        //_change($(this).attr("val"));
    });
}

function hideMarkers() {
    setMarkers(null);
}

$(function () {
    getval();
    getvalue();

    localStorage.clear();
});

function getval() {
    var bozeong = localStorage.getItem("charter_select"); //aaa,sss,3000
    var wallse = localStorage.getItem("monthly_select");
    alert(bozeong);

    if (wallse) {
        return make_wallse_filter_cluster(bozeong, wallse);
    } else {
        return make_bozeong_filter_cluster(bozeong);
    }
} // getval
function make_bozeong_filter_cluster(bozeong) {
    let params = {
        bozeong: bozeong,
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
                alert(item.length);
                alert(item[0].x);
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
                    mamul_click_info(cluster);
                }
            );
        }, // for문
    }); // each문  ajax
} //success    make filter cluster

function make_wallse_filter_cluster(bozeong, wallse) {
    let params = {
        bozeong: bozeong,
        wallse: wallse,
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
                alert(item.length);
                alert(item[0].x);
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
                    mamul_click_info(cluster);
                }
            );
        }, // for문
    }); // each문  ajax
} //success    make wallse filter cluster

function getvalue() {
    var input_data = [];

    var medical = localStorage.getItem("Range_medical");
    var security = localStorage.getItem("Range_security");
    var shopping = localStorage.getItem("Range_shopping");
    var market = localStorage.getItem("Range_market");
    var leisure = localStorage.getItem("Range_leisure");
    var convenient = localStorage.getItem("Range_convenient");
    var oil = localStorage.getItem("Range_oil");
    var traffic = localStorage.getItem("Range_traffic");
    var restaurant = localStorage.getItem("Range_restaurant");
    var park = localStorage.getItem("Range_park");
    input_data.push(medical);
    input_data.push(security);
    input_data.push(shopping);
    input_data.push(market);
    input_data.push(leisure);
    input_data.push(convenient);
    input_data.push(oil);
    input_data.push(traffic);
    input_data.push(restaurant);
    input_data.push(park);

    alert(input_data);
    //return convert_pca(input_data);
    return convert_pca(
        medical,
        security,
        shopping,
        market,
        leisure,
        convenient,
        oil,
        traffic,
        restaurant,
        park
    );
}
function convert_pca(
    medical,
    security,
    shopping,
    market,
    leisure,
    convenient,
    oil,
    traffic,
    restaurant,
    park
) {
    //alert(security);
    let params = {
        medical: medical,
        security: security,
        shopping: shopping,
        market: market,
        leisure: leisure,
        convenient: convenient,
        oil: oil,
        traffic: traffic,
        restaurant: restaurant,
        park: park,
    };
    $.ajax({
        type: "POST",
        headers: {
            "X-CSRFTOKEN": "{{ csrf_token }}",
        },
        //url: '/estates/pca?medical='+medical+'&security='+security+'&shopping='+shopping+'&market='+market+'&leisure='+leisure,
        url: "/estates/pca",
        data: JSON.stringify(params),
        dateType: "json",

        success: function (result) {
            //console.log(result);
            $.each(result, function (index, item) {
                alert(item);
            }); //each
        }, //success
    }); //ajax
} //convert_pca
//       })//ajax
//     }  make filter cluster

//alert({{medical_val}})
// getval
