$('.nav li, dd').mouseenter(function(){
	$(this).children('.nav_dl').show();
	$(this).children('.nav_dl_dl').show();
});
$('.nav li, dd').mouseleave(function(){
	$(this).children('.nav_dl').hide();
	$(this).children('.nav_dl_dl').hide();
});


$('.allmain').isotope({
	itemSelector: '.allmain li'
});

$('.allproduct li').click(function(){
	$(this).addClass('allcurrent').siblings('li').removeClass('allcurrent');
	var dataValue=$(this).attr('data');
	$('.allmain').isotope({
		itemSelector: '.allmain li',
		filter:dataValue
	});
});