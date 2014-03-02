
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
			spul +=  '<p><a href=' + "#" + ouder[i] + '>' + '[' + (i) + ']' + '</a>' +'&nbsp' + '<a href=' + hrefs[i] + '>' +  hrefs[i] + '</a></p><hr><br>';
        });
       $('.sreferences div').html(spul);
       $('#sref div').html(spul);
})
