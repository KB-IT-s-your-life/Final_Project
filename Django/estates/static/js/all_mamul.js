$('#hide_mamul').hide()

function showCluster() {
    // setMarkers(map);

    // $(".customoverlay").click(function () {
    //     facilities_click_change($(this).attr("val"));
    // });
    $('#show_mamul').hide()
    $('#hide_mamul').show()
}

//    setMarkers(null);

function hideCluster() {
    $('#hide_mamul').hide()
    $('#show_mamul').show()
    $('#sidebar').hide()
    $('#facilities').hide()
    $('#mamulbar').hide()
    
    // setMarkers(null);
}