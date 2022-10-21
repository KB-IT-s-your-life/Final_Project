function facilities_click_change(dong) {
    $("#facilities").show();
    $.ajax({
        type:'get',
        url: '/estates/getfacilities?title='+dong,
        dateType: 'json',
        success:function(jsonData){
            var fac = [];
            fac.push(jsonData.facil.title);
            fac.push(jsonData.facil.subway);
            fac.push(jsonData.facil.bus);
            fac.push(jsonData.facil.book);
            fac.push(jsonData.facil.golf);
            fac.push(jsonData.facil.bath);
            fac.push(jsonData.facil.gas);
            fac.push(jsonData.facil.laundry);
            fac.push(jsonData.facil.movie);
            fac.push(jsonData.facil.bakery);
            fac.push(jsonData.facil.gym);
            fac.push(jsonData.facil.hospital);
            fac.push(jsonData.facil.pharmacy);
            fac.push(jsonData.facil.medical);
            fac.push(jsonData.facil.safety);
            fac.push(jsonData.facil.police);
            fac.push(jsonData.facil.fire);
            fac.push(jsonData.facil.park);
            fac.push(jsonData.facil.karaoke);
            fac.push(jsonData.facil.billiard);
            fac.push(jsonData.facil.restaurant);
            fac.push(jsonData.facil.mart);
            fac.push(jsonData.facil.shop);
            // $('#facilities').html(fac)
            var chart = new CanvasJS.Chart("piechart",
            {
                theme: "light2",
                title:{
                    text: "Gaming Consoles Sold in 2012"
                },		
                data: [
                {       
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - #percent %",
                    yValueFormatString: "#,##0,,.## Million",
                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: 4181563, indexLabel: "PlayStation 3" },
                        {  y: 2175498, indexLabel: "Wii" },
                        {  y: 3125844, indexLabel: "Xbox 360" },
                        {  y: 1176121, indexLabel: "Nintendo DS"},
                        {  y: 1727161, indexLabel: "PSP" },
                        {  y: 4303364, indexLabel: "Nintendo 3DS"},
                        {  y: 1717786, indexLabel: "PS Vita"}
                    ]
                }
                ]
            });
            chart.render();
        } // callback
    })
}