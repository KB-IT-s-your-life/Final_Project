var fac = [];

function facilities_click_change(dong) {
    $("#facilities").show();
    $("#subplot_btn").show();
    $.ajax({
        type:'get',
        url: '/estates/getfacilities?title='+dong,
        dateType: 'json',
        success: function (jsonData) {
            fac = []
            fac.push(jsonData.facil.title);
            fac.push(jsonData.facil.traffic);
            fac.push(jsonData.facil.subway);
            fac.push(jsonData.facil.bus);
            fac.push(jsonData.facil.treatment);
            fac.push(jsonData.facil.hospital);
            fac.push(jsonData.facil.pharmacy);
            fac.push(jsonData.facil.medical);
            fac.push(jsonData.facil.welfare);
            fac.push(jsonData.facil.security);
            fac.push(jsonData.facil.police);
            fac.push(jsonData.facil.fire);
            fac.push(jsonData.facil.post);
            fac.push(jsonData.facil.library);
            fac.push(jsonData.facil.facilities);
            fac.push(jsonData.facil.bath);
            fac.push(jsonData.facil.laundry);
            fac.push(jsonData.facil.leisure);
            fac.push(jsonData.facil.park);
            fac.push(jsonData.facil.museum);
            fac.push(jsonData.facil.golf);
            fac.push(jsonData.facil.gym);
            fac.push(jsonData.facil.billard);
            fac.push(jsonData.facil.karaoke);
            fac.push(jsonData.facil.movie);
            fac.push(jsonData.facil.shop);
            fac.push(jsonData.facil.department);
            fac.push(jsonData.facil.complex);
            fac.push(jsonData.facil.center);
            fac.push(jsonData.facil.book);
            fac.push(jsonData.facil.mart);
            fac.push(jsonData.facil.large);
            fac.push(jsonData.facil.none);
            fac.push(jsonData.facil.supermarket);
            fac.push(jsonData.facil.market);
            fac.push(jsonData.facil.bakery);
            fac.push(jsonData.facil.restaurant);
            fac.push(jsonData.facil.west);
            fac.push(jsonData.facil.bunsik);
            fac.push(jsonData.facil.japan);
            fac.push(jsonData.facil.china);
            fac.push(jsonData.facil.korea);
            fac.push(jsonData.facil.cafe);
            fac.push(jsonData.facil.fast);
            //$('#facilities').html(fac)

            new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                    labels: ["교통", "의료", "생활복지시설", "생활편의시설", "여가", "쇼핑시설", "장보기시설", "음식점", "카페", "패트스푸드"],
                    datasets: [{
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f"],
                        data: [fac[1], fac[4], fac[8], fac[14], fac[17], fac[25], fac[30], fac[36], fac[42], fac[43]]
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: fac[0] + ' 의 편의 시설 수',
                    }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal traffic"), {
                type: 'horizontalBar',
                data: {
                labels: ["지하철", "버스"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[2], fac[3]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 교통 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal treatment"), {
                type: 'horizontalBar',
                data: {
                labels: ["병원", "약국", "의원"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[5], fac[6], fac[7]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 의료 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal welfare"), {
                type: 'horizontalBar',
                data: {
                labels: ["치안", "경찰서", "119안전센터", "우체국", "도서관"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[9], fac[10], fac[11], fac[12], fac[13]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 생활복지시설 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal facilities"), {
                type: 'horizontalBar',
                data: {
                labels: ["목욕장", "세탁소"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[15], fac[16]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 생활편의시설 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal leisure"), {
                type: 'horizontalBar',
                data: {
                labels: ["공원", "박물관/미술관", "골프장", "체력단련장", "당구장", "노래방", "영화관"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[18], fac[19], fac[20], fac[21], fac[22], fac[23], fac[24]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 여가 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal shop"), {
                type: 'horizontalBar',
                data: {
                labels: ["백화점", "복합쇼핑몰", "쇼핑센터", "서점"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[26], fac[27], fac[28], fac[29]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 쇼핑 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal mart"), {
                type: 'horizontalBar',
                data: {
                labels: ["대규모점포", "구분없음", "대형마트", "시장", "제과점"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[31], fac[32], fac[33], fac[34], fac[35]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 장보기 편의 시설 수',
                }
                }
            });
            new Chart(document.getElementById("bar-chart-horizontal restaurant"), {
                type: 'horizontalBar',
                data: {
                labels: ["경양식", "분식", "일식", "중식", "한식"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: [fac[37], fac[38], fac[39], fac[40], fac[41]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: fac[0] + ' 의 음식점 편의 시설 수',
                }
                }
            });
        } // callback
    })
}

var traffic = document.getElementById('btn_traffic')
traffic.addEventListener('click', function () {
    if ($("#bar_traffic").css("display") == "none") {
        $("#bar_traffic").show()
    }
    else {
        $("#bar_traffic").hide()
    }
})

var treatment = document.getElementById('btn_treatment')
treatment.addEventListener('click', function () {
    if ($("#bar_treatment").css("display") == "none") {
        $("#bar_treatment").show()
    }
    else {
        $("#bar_treatment").hide()
    }
})

var welfare = document.getElementById('btn_welfare')
welfare.addEventListener('click', function () {
    if ($("#bar_welfare").css("display") == "none") {
        $("#bar_welfare").show()
    }
    else {
        $("#bar_welfare").hide()
    }
})

var facilities = document.getElementById('btn_facilities')
facilities.addEventListener('click', function () {
    if ($("#bar_facilities").css("display") == "none") {
        $("#bar_facilities").show()
    }
    else {
        $("#bar_facilities").hide()
    }
})

var leisure = document.getElementById('btn_leisure')
leisure.addEventListener('click', function () {
    if ($("#bar_leisure").css("display") == "none") {
        $("#bar_leisure").show()
    }
    else {
        $("#bar_leisure").hide()
    }
})

var shop = document.getElementById('btn_shop')
shop.addEventListener('click', function () {
    if ($("#bar_shop").css("display") == "none") {
        $("#bar_shop").show()
    }
    else {
        $("#bar_shop").hide()
    }
})

var mart = document.getElementById('btn_mart')
mart.addEventListener('click', function () {
    if ($("#bar_mart").css("display") == "none") {
        $("#bar_mart").show()
    }
    else {
        $("#bar_mart").hide()
    }
})

var restaurant = document.getElementById('btn_restaurant')
restaurant.addEventListener('click', function () {
    if ($("#bar_restaurant").css("display") == "none") {
        $("#bar_restaurant").show()
    }
    else {
        $("#bar_restaurant").hide()
    }
})