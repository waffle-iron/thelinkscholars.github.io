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
});