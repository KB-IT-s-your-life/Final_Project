var sidebar = document.getElementById('sidebarToggle');
sidebar.addEventListener('click', function(){
    if ($("#sidebar").css("display") == "none") {
        if ($("#facilities").css("display") != "none") {
            $("#facilities").hide();
        }
        if ($("#mamulbar").css("display") != "none") {
            $("#mamulbar").hide();
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
        if ($("#mamulbar").css("display") != "none") {
            $("#mamulbar").hide();
        }
        $("#facilities").show();
    } else {
        $("#facilities").hide();
    }
})

var mamul = document.getElementById('mamulToggle');
mamul.addEventListener('click', function () {
    if ($("#mamulbar").css("display") == "none") {
        if ($("#sidebar").css("display") != "none") {
            $("#sidebar").hide();
        }
        if ($("#facilities").css("display") != "none") {
            $("#facilities").hide();
        }
        $("#mamulbar").show();
    } else {
        $("#mamulbar").hide();
    }
})