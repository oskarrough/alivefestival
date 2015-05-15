/*global RoughPjax, runSlideshows, artistMasonry */

$(document).ready(function() {

	// loading
	var $main = $('.Main');
	$main.imagesLoaded(function() {
		$('html').addClass('is-loaded');
	});

	// enable pjax
	var roughPjax = new RoughPjax();

	// masonry
	var $msnry = $('#Masonry');
	if ($msnry.length > 0) {
		artistMasonry();
	}

	runSlideshows();

	// Clickable dropdowns (touch4evah)
	// $('.has-dropdown').children('a').click(function(event) {
	// 	event.preventDefault();
	// 	$(this).parent().toggleClass('js-hover');
	// });
});
