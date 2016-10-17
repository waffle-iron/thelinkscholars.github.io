$(document).ready(function()
{
	$('.button-collapse').sideNav();
	$(".dropdown-button").dropdown();
	$(".carousel-item.person").click(function()
	{
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
	});
	window.position = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st > window.position){
			$("header").css("opacity","0")
		} else {
			$("header").css("opacity","1")
		}
		window.position = st;
	});
});