var fac = [];
var pie = new Chart(document.getElementById("pie-chart"))
var tra = new Chart(document.getElementById("bar-chart-horizontal traffic"))
var tre = new Chart(document.getElementById("bar-chart-horizontal treatment"))
var wel = new Chart(document.getElementById("bar-chart-horizontal welfare"))
var faci = new Chart(document.getElementById("bar-chart-horizontal facilities"))
var lei = new Chart(document.getElementById("bar-chart-horizontal leisure"))
var sho = new Chart(document.getElementById("bar-chart-horizontal shop"))
var mar = new Chart(document.getElementById("bar-chart-horizontal mart"))
var res = new Chart(document.getElementById("bar-chart-horizontal restaurant"))
var temp_plot = '';

function clear() {
    pie.destroy()
    tra.destroy()
    tre.destroy()
    wel.destroy()
    faci.destroy()
    lei.destroy()
    sho.destroy()
    mar.destroy()
    res.destroy()
}

function facilities_click_change(dong) {
    $("#facilities").show();
    $("#mamulbar").hide();
    $("#subplot_btn").show();
    $("#bar_traffic").hide()
    $("#bar_treatment").hide()
    $("#bar_welfare").hide()
    $("#bar_facilities").hide()
    $("#bar_leisure").hide()
    $("#bar_shop").hide()
    $("#bar_mart").hide()
    $("#bar_restaurant").hide()

    if (temp_plot != dong) {
        clear()
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
            
            pie = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                    labels: ["??????", "??????", "??????????????????", "??????????????????", "??????", "????????????", "???????????????", "?????????", "??????", "???????????????"],
                    datasets: [{
                        //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f"],
                        backgroundColor:["#E1F5FE","#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B"],
                        data: [fac[1], fac[4], fac[8], fac[14], fac[17], fac[25], fac[30], fac[36], fac[42], fac[43]]
                    }]
                },
                options: {
                    title: {
                        fontSize: 30,
                        display: true,
                        text: fac[0] + ' ????????? ???',
                    }
                }
            });
            tra = new Chart(document.getElementById("bar-chart-horizontal traffic"), {
                type: 'horizontalBar',
                data: {
                labels: ["?????????", "??????"],
                datasets: [
                    {
                    backgroundColor: ["#7D6E83", "#D0B8A8"],
                    data: [fac[2], fac[3]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ?????? ???',
                }
                }
            });
            tre = new Chart(document.getElementById("bar-chart-horizontal treatment"), {
                type: 'horizontalBar',
                data: {
                labels: ["??????", "??????", "??????"],
                datasets: [
                    {
                    backgroundColor: ["#8CC0DE", "#FAF0D7","#FFD9C0"],
                    data: [fac[5], fac[6], fac[7]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ?????? ???',
                }
                }
            });
            wel = new Chart(document.getElementById("bar-chart-horizontal welfare"), {
                type: 'horizontalBar',
                data: {
                labels: ["??????", "?????????", "119????????????", "?????????", "?????????"],
                datasets: [
                    {
                    backgroundColor: ["#3e95cd", "#8e5ea2","#D0C9C0","#EFEAD8","#6D8B74","#5F7161"],
                    data: [fac[9], fac[10], fac[11], fac[12], fac[13]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ???????????? ???',
                }
                }
            });
            faci = new Chart(document.getElementById("bar-chart-horizontal facilities"), {
                type: 'horizontalBar',
                data: {
                labels: ["?????????", "?????????"],
                datasets: [
                    {
                    backgroundColor: ["#EEE4AB", "#99C4C8"],
                    data: [fac[15], fac[16]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ???????????? ???',
                }
                }
            });
            lei = new Chart(document.getElementById("bar-chart-horizontal leisure"), {
                type: 'horizontalBar',
                data: {
                labels: ["??????", "?????????/?????????", "?????????", "???????????????", "?????????", "?????????", "?????????"],
                datasets: [
                    {
                    backgroundColor: ["#92BA92", "#78938A","#525E75","#F1DDBF","#DAB88B","#632626","#F3E9DD"],
                    data: [fac[18], fac[19], fac[20], fac[21], fac[22], fac[23], fac[24]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ?????? ???',
                }
                }
            });
            sho = new Chart(document.getElementById("bar-chart-horizontal shop"), {
                type: 'horizontalBar',
                data: {
                labels: ["?????????", "???????????????", "????????????", "??????"],
                datasets: [
                    {
                    backgroundColor: ["#694E4E", "#886F6F","#C1A3A3","#F3C5C5"],
                    data: [fac[26], fac[27], fac[28], fac[29]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ?????? ???',
                }
                }
            });
            mar = new Chart(document.getElementById("bar-chart-horizontal mart"), {
                type: 'horizontalBar',
                data: {
                labels: ["???????????????", "????????????", "????????????", "??????", "?????????"],
                datasets: [
                    {
                    backgroundColor: ["#986D8E", "#87A8A4","#D9CAB3","#DEBA9D","#EFE3D0"],
                    data: [fac[31], fac[32], fac[33], fac[34], fac[35]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ?????? ?????? ???',
                }
                }
            });
            res = new Chart(document.getElementById("bar-chart-horizontal restaurant"), {
                type: 'horizontalBar',
                data: {
                labels: ["?????????", "??????", "??????", "??????", "??????", "??????", "???????????????"],
                datasets: [
                    {
                    backgroundColor: ["#9DAB86", "#DED7B1","#ECB390","#E08F62","#DF7861","#CC7351","#CD5D7D"],
                    data: [fac[37], fac[38], fac[39], fac[40], fac[41], fac[42], fac[43]]
                    }
                ]
                },
                options: {
                legend: { display: false },
                    title: {
                    fontSize: 20,
                    display: true,
                    text: fac[0] + ' ????????? ?????? ???',
                }
                }
            });
        } // callback
        })
    }
    else {
        clear()
    }
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