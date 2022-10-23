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

function mamulbar_click_change(cluster) {
    $("#mamulbar").show();
    console.log(cluster._markers)
    var mamul_list = [];
    for (i = 0; i < cluster._markers.length; i++) {
        mamul_list.push(cluster._markers[i].Gb + " ");
    }
    console.log(mamul_list)
    $("#mamulbar").html(mamul_list);
}
