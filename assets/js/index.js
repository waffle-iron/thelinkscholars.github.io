$(".parallax").parallax();
$(".carousel").carousel({padding:100,shift:100})
$(".slider").slider({interval:1000});
$(".slides").hover(function(){$(".slider").slider('pause');},function(){$(".slider").slider('start');})