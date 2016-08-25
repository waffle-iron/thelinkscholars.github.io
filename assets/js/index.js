$(".parallax").parallax();
$(".carousel").carousel({padding:100,shift:100})
$(".slider:not(.home-slider)").slider({interval:1000});
$(".home-slider").slider({indicators:false,full_width:true});
$(".slides").hover(function(){$(".slider").slider('pause');},function(){$(".slider").slider('start');})