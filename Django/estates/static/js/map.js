var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 9, // 지도의 확대 레벨
            };

        home();

        function home() {
            $("#sidebar").hide();
            $("#facilities").hide();
            var map = new kakao.maps.Map(mapContainer, mapOption),
                customOverlay = new kakao.maps.CustomOverlay({}),
                infowindow = new kakao.maps.InfoWindow({ removable: true });
            var x_positions = [];
            var y_positions = [];
            var dong_names = [];
            var sum = [];

            $.getJSON("http://localhost:8000/static/json/real.geojson", function (geojson) {
                var data = geojson.features;
                var coordinates = []; //좌표 저장할 배열
                var name = ""; //구 이름 저장

                $.each(data, function (index, val) {
                    coordinates = val.geometry.coordinates;
                    name = val.properties.SIG_KOR_NM;
                    displayArea(coordinates, name);
                });
            });

            var polygons = []; //클릭시 폴리곤 없앨때 사용 예정

            function displayArea(coordinates, name) {
                var path = []; //폴리곤 그려줄 path
                var points = []; //중심좌표 구하기 위한 지역구 좌표들

                $.each(coordinates[0], function (index, coordinate) {
                    var point = new Object();
                    point.x = coordinate[1];
                    point.y = coordinate[0];
                    points.push(point);
                    path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0])); //json에 좌표순서가 반대로 되있어서 요래 해줌.
                });

                //다각형 생성
                var polygon = new kakao.maps.Polygon({
                    map: map, //다각형 표시할 지도 객체
                    path: path,
                    strokeWeight: 2,
                    strokeColor: "#004c80",
                    strokeOpacity: 0.8,
                    fillColor: "#fff",
                    fillOpacity: 0.7,
                });
                polygons.push(polygon); //나중에 특정 구 누르면 확대 될때 폴리곤 없애야해서 만들어줬음

                //다각형에 mouseover 이벤트 등록, 발생시 색 변경
                // 지역명 표시하는 커스텀오버레이 표시

                kakao.maps.event.addListener(
                    polygon,
                    "mouseover",
                    function (mouseEvent) {
                        polygon.setOptions({ fillColor: "#09f" });

                        customOverlay.setContent(
                            '<div class="area">' + name + "</div>"
                        );

                        customOverlay.setPosition(mouseEvent.latLng);
                        customOverlay.setMap(map);
                    }
                );
                // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
                kakao.maps.event.addListener(
                    polygon,
                    "mousemove",
                    function (mouseEvent) {
                        customOverlay.setPosition(mouseEvent.latLng);
                    }
                );

                // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
                // 커스텀 오버레이를 지도에서 제거합니다
                kakao.maps.event.addListener(polygon, "mouseout", function () {
                    polygon.setOptions({ fillColor: "#fff" });
                    customOverlay.setMap(null);
                });

                //다각형에 click이벤트를 등록하고 이벤트가 발생하면 해당 지역을 확대.
                kakao.maps.event.addListener(polygon, "click", function () {
                    deletepolygon(polygons); //해당지역 확대 후 폴리곤 제거
                    customOverlay.setContent(
                        '<div class="area" style="display:none;">' + name + "</div>"
                    );
                    //3레벨 확대
                    var level = map.getLevel() - 2;
                    var a, b;
                    $.getJSON(
                        "http://localhost:8000/static/json/구별 중심좌표.json",
                        function (json) {
                            var data = json;
                            $.each(data, function (index, item) {
                                if (item.자치구명 == name) {
                                    a = item.X;
                                    b = item.Y;
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

                    $.getJSON(
                        "http://localhost:8000/static/json/동시각화 전용.json",
                        function (json) {
                            var data = json;

                            $.each(data, function (index, item) {
                                if (item.자치구명 == name) {
                                    var dong = item.법정동명;
                                    var X = item.position_x;
                                    var Y = item.position_y;
                                    var s = item.합계;
                                    x_positions.push(X);
                                    y_positions.push(Y);
                                    dong_names.push(dong);
                                    sum.push(s);
                                }
                            }); //법정동 마커 찍기위해 좌표,법정동이름,합계 저장하기
                            var imageSrc =
                                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'";
                            var imageSize = new kakao.maps.Size(34, 35);
                            var imageOption = {
                                offset: new kakao.maps.Point(17, 36),
                            };
                            var markerImage = new kakao.maps.MarkerImage(
                                imageSrc,
                                imageSize,
                                imageOption
                            );

                            var markerTmp; // 마커
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
                                customOverlay = new kakao.maps.CustomOverlay({
                                    map: map,
                                    position: new kakao.maps.LatLng(
                                        x_positions[i],
                                        y_positions[i]
                                    ),
                                    content: contentStr,
                                    yAnchor: 1,
                                });
                            } //for문facilities_click_change
                            $(".customoverlay").click(function () {
                                facilities_click_change($(this).attr("val"));
                            });
                        }
                    ); //동시각화 전용 getjson
                });
            }

            function deletepolygon(polygons) {
                for (var i = 0; i < polygons.length; i++) {
                    polygons[i].setMap(null);
                }
                polygons = [];
            }
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
            kakao.maps.event.addListener(map, "zoom_changed", function () {
                // 지도의 현재 레벨을 얻어옵니다
                var level = map.getLevel();
            });
        }