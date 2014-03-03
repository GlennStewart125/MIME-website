/** Dynamische links **/

$(function() { 
	var hrefs = [];
	var spul ="<h2>Referenties</h2>";
	var ouder=[]; 
		$('#tekst').find('a').each(function() 
		{
			hrefs.push($(this).attr('href'));
			ouder.push($(this).parent().parent().parent().attr('id'));
		})	
		jQuery.each(hrefs, function(i, val) {
			spul +=  '<p><a href=' + '#' + ouder[i]  +' class="scrollto" '+'>' + '[' + (i) + ']' + '</a>' +'&nbsp' + '<a href=' + hrefs[i] + '>' +  hrefs[i] + '</a></p><hr><br>';
        });
       $('#sref div').html(spul);
})


			

$(document).ready(function () {
			
			var pl1 = [];
			$('#pl-gegevens').find('ul li').each(function(){
			pl1.push($(this).text());
			});
 
            var build_toen_data = [
                [1 , pl1[0]],
                [2 , pl1[1]],
                [3 , pl1[2]],
                [4 , pl1[3]],
                [5 , pl1[4]]
            ];
            var build_nu_data =  [           
			    [1 , pl1[5]],
                [2 , pl1[6]],
                [3 , pl1[7]],
                [4 , pl1[8]],
                [5 , pl1[9]]
            ];
 
            var data = [
                {label: "In het begin", data: build_toen_data, bars: {fillColor: "#00FFFF"}, color: "#00FFFF"},
                {label: "Nu", data: build_nu_data, bars: {fillColor: "#0000FF"}, color: "#0000FF"}
            ];
			
            var options = {
                xaxis: {
                    min: 0,
                    max: 6,
                    mode: null,
                    ticks: [
                        [1, "Text"],
                        [2, "Image"],
                        [3, "Audio"],
                        [4, "Video"],
                        [5, "Application"]
                    ],
                    tickLength: 0,
                    axisLabel: "Discrete media types",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, yaxis: {
                    axisLabel: "Aantal",
                    tickDecimals: 0,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, grid: {
                    hoverable: true,
                    clickable: false,
                    borderWidth: 1
                }, legend: {
                    labelBoxBorderColor: "none",
                    position: "nw"
                }, series: {
                    shadowSize: 1,
                    bars: {
                        show: true,
                        barWidth: 0.13,
                        order: 1
                    }
                }
            };
            $.plot($("#placeholder1"), data, options);
			
			
           var build_toen_data = [
                [1, pl1[10]],
                [2, pl1[11]],
            ];
            var build_nu_data = [
                [1, pl1[12]],
                [2, pl1[13]],
            ];
 
            var data = [
                {label: "In het begin", data: build_toen_data, bars: {fillColor: "#00FFFF"}, color: "#00FFFF"},
                {label: "Nu", data: build_nu_data, bars: {fillColor: "#0000FF"}, color: "#0000FF"}
            ];
			
            var options = {
                xaxis: {
                    min: 0,
                    max: 3,
                    mode: null,
                    ticks: [
                        [1, "Multipart"],
                        [2, "Message"],
                    ],
                    tickLength: 0,
                    axisLabel: "media types",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, yaxis: {
                    axisLabel: "Aantal",
                    tickDecimals: 0,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, grid: {
                    hoverable: true,
                    clickable: false,
                    borderWidth: 1
                }, legend: {
                    labelBoxBorderColor: "none",
                    position: "nw"
                }, series: {
                    shadowSize: 1,
                    bars: {
                        show: true,
                        barWidth: 0.13,
                        order: 1
                    }
                }
            };
            $.plot($("#placeholder2"), data, options);			
			
			
			 var build_toen_data = [
                [1, pl1[14]],
            ];
            var build_nu_data = [
                [1,  pl1[15]],
            ];
 
            var data = [
                {label: "In het begin", data: build_toen_data, bars: {fillColor: "#00FFFF"}, color: "#00FFFF"},
                {label: "Nu", data: build_nu_data, bars: {fillColor: "#0000FF"}, color: "#0000FF"}
            ];
			
            var options = {
                xaxis: {
                    min: 0,
                    max: 2,
                    mode: null,
                    ticks: [
                        [1, "Model"]
                    ],
                    tickLength: 0,
                    axisLabel: "media types",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, yaxis: {
                    axisLabel: "Aantal",
                    tickDecimals: 0,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: "Verdana, Arial, Helvetica, Tahoma, sans-serif",
                    axisLabelPadding: 5
                }, grid: {
                    hoverable: true,
                    clickable: false,
                    borderWidth: 1
                }, legend: {
                    labelBoxBorderColor: "none",
                    position: "nw"
                }, series: {
                    shadowSize: 1,
                    bars: {
                        show: true,
                        barWidth: 0.13,
                        order: 1
                    }
                }
            };
            $.plot($("#placeholder3"), data, options);			
			
        });