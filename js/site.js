/**
$(function() { 
	var hrefs = [];
		$('#tekst a').each(function() 
		{
			var href = $(this).attr("href");
			$(".s16 div ").append('<p><a href=' + href + '>' +  href + '</a><p><hr><br>');
		})	
})
**/


/** Dynamische links **/

$(function() { 
	var hrefs = [];
	var spul ="";
	var ouder=[]; 
		$('#tekst').find('a').each(function() 
		{
			hrefs.push($(this).attr('href'));
			ouder.push($(this).parent().parent().parent().attr('id'));
			console.log(ouder);
		})	
		jQuery.each(hrefs, function(i, val) {
			//jQuery.each(ouder, function(p, val) {
			//spul +=  '<p><a href=' + hrefs[i] + '>' + '[' +(i+1) + ']' + " " + hrefs[i] + '</a></p><hr><br>';
			spul +=  '<p><a href=' + "#" + ouder[i] + '>' + '[' + (i) + ']' + '</a>' +'&nbsp' + '<a href=' + hrefs[i] + '>' +  hrefs[i] + '</a></p><hr><br>';
			//console.log(spul);
			//})
        });
       $('#sref div').html(spul);
})

//spul +=  '<p><a href=' + "#" + ouder[i] + '>' + '[' + (i) + ']' + '</a>' + '<a href=' + hrefs[i] + '>' +  hrefs[i] + '</a></p><hr><br>';
//spul +=  '<p><a href=' + "#" + ouder[i] + "&nbsp" + "s" + i + '>' + '[' + (i) + ']' + '</a>' + '<a href=' + hrefs[i] + '>' +  hrefs[i] + '</a></p><hr><br>';