//Smooth scrolling function
$(document).ready(function($) {
	$(".scrollto").click(function(scroller){
		scroller.preventDefault();
		
		$("html,body").animate({scrollTop: $(this.hash).offset().top - 120}, 1500);
		location.hash = this.hash;
	});
});