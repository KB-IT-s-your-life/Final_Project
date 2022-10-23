function mamulbar_click_marker(mark) {
    $("#mamulbar").show();
    var pk = mark.Gb;
    $.ajax({
        type: "get",
        url: "/estates/getmamuls?pk=" + pk,
        dateType: "json",
        success: function (jsonData) {
            $("#mamulbar").html(jsonData.mamuls.zibunjuso);

            //$.each(jsonData, function(index, item){
            //  alert('hhhh')
            //if (item == title){
            //str += "subway: "+ item.subway + "bus: "+ item.bus + "book"+ item.book + "golf"+ item.golf + "bath"+ item.bath + "gas"+ item.gas + "laundry"+ item.laundry + "movie"+ item.movie + "bakery"+ item.bakery + "gym"+ item.gym + "hospital"+ item.hospital + "pharmacy"+ item.pharmacy + "medical"+ item.medical + "safefy"+ item.safefy + "police"+ item.police + "fire"+ item.fire + "park"+ item.park +"karaoke"+ item.karaoke + "billiard"+ item.billiard + "restaurant"+ item.restaurant + "mart"+ item.mart + "shop"+ item.shop
            //$('#facilities').html('hhh');
            //}
            //})

            //print(jsonData.name)
        }, // callback
    });
}

function mamul_click_info(mamul_detail) {
    $("#mamulbar").empty();
    $("#mamulbar").show();
    var mamul_list = [];
    for (i = 0; i < mamul_detail._markers.length; i++) {
        mamul_list.push(mamul_detail._markers[i].Gb + " ");
    }
    for (i = 0; i < mamul_detail._markers.length; i++) {
        $.ajax({
            type: "get",
            url: "/estates/getmamuls?pk=" + mamul_list[i],
            dateType: "json",
            success: function (jsonData) {
                $("#mamulbar").append(
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
                        "<span class = 'junwallse'>" +
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
                        "5층 /</span>" +
                        "<span class = 'pyeong'>" +
                        jsonData.mamuls.pyeong +
                        "평 /</span>" +
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
                        "<span class = 'predict'>" +
                        jsonData.mamuls.predict.toFixed(1) +
                        "만</span>" +
                        "<span class = 'predict_result'>" +
                        "꿀매물" +
                        "</span>" +
                        "</div>" +
                        "</div>" +
                        "<div class = 'info_right'>" +
                        "<img id ='mamul_img'src='https://file.kbland.kr/image/kbstar/land/img/revw/userseq/1419503/20220123/27e8fbab26c1e009.jpeg'>" +
                        "</div>" +
                        "<hr>"
                );
            }, //callback
        }); //ajax
    } //for
} //facilities_click_info
