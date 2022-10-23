
function facilities_click() {
    if ($("#facilities").css("display") == "none") {
        $("#facilities").show();
    } else {
        $("#facilities").hide();
    }
}

function facilities_click_marker(mark) {
    $("#facilities").show();
    var pk = mark.Gb;
    $.ajax({
        type: "get",
        url: "/estates/getmamuls?pk=" + pk,
        dateType: "json",
        success: function (jsonData) {
            $("#facilities").html(jsonData.mamuls.zibunjuso);

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

function facilities_click_change(mamul_detail) {
    $("#facilities").show();
    var mamul_list = [];
    for (i = 0; i < mamul_detail._markers.length; i++) {
        mamul_list.push(mamul_detail._markers[i].Gb + " ");
    }
    $("#facilities").html(mamul_list);
}
