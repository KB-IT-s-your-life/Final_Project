var sidebar = document.getElementById('sidebarToggle');
sidebar.addEventListener('click', function(){
    if ($("#sidebar").css("display") == "none") {
        if ($("#facilities").css("display") != "none") {
            $("#facilities").hide();
        }
        $("#sidebar").show();
    } else {
        $("#sidebar").hide();
    }
})

var facilities = document.getElementById('facilitiesToggle');
facilities.addEventListener('click', function () {
    if ($("#facilities").css("display") == "none") {
        if ($("#sidebar").css("display") != "none") {
            $("#sidebar").hide();
        }
        $("#facilities").show();
    } else {
        $("#facilities").hide();
    }
})