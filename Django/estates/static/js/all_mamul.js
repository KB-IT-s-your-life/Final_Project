$('#hide_mamul').hide()

var mapContainaper = document.getElementById("map"), // 지도를 표시할 div
mapOption = {
    center: new kakao.maps.LatLng(37.55811, 126.97406), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
};

 // 월세 클러스터


function showCluster() {

    clusterer_index.setMap(map);
    $('#show_mamul').hide();
    $('#hide_mamul').show();
} // show cluster

//    setMarkers(null);

function hideCluster() {

    clusterer_index.setMap(null);
    $('#hide_mamul').hide();
    $('#show_mamul').show();
    $('#sidebar').hide();
    $('#facilities').hide();
    $('#mamulbar').hide();
    
    // setMarkers(null);
}