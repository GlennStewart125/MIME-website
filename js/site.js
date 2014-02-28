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
		$('#tekst').find('a').each(function() 
		{
			hrefs.push($(this).attr('href'));
		})	
		jQuery.each(hrefs, function(i, val) {
          spul +=  '<p><a href=' + hrefs[i] + '>' + '[' +(i+1) + ']' + " " + hrefs[i] + '</a></p><hr><br>';
		  console.log(spul);
        });
       $('.s16 div').html(spul);
})





