$('#main-tab').on('toggled', function (event, tab) {
	$('.recruitment-details>.content').removeClass('animated fadeInRight').addClass('animated fadeInRight');
});
$('#fte-tab').on('toggled', function (event, tab) {
	$('.recruitment-details .tabs-content .content').removeClass('animated fadeInUp').addClass('animated fadeInUp');
});
$('#intern-tab').on('toggled', function (event, tab) {
	$('.recruitment-details .tabs-content .content').removeClass('animated fadeInUp').addClass('animated fadeInUp');
});
