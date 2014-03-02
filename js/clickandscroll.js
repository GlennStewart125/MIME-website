//Smooth scrolling function
$(document).ready(function($) {
	$(".scroll").click(function(scroller){
		scroller.preventDefault();
		
		$("html,body").animate({scrollTop: $(this.hash).offset().top - 15}, "slow");
		$(".scrollacity").animate({ opacity: 0.6 }, "fast", unDo);
		function unDo(){ $(".scrollacity").animate({ opacity: 1.0 }, 950); }
		location.hash = this.hash;
	});
});