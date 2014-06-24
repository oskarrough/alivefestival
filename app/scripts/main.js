$(document).ready(function() {

	var bLazy = new Blazy({
		selector: '.js-ll',
		offset: 200
	});

	$('.js-Popup--artist').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,

			preload: [0,2], // read about this option in next Lazy-loading section

			navigateByImgClick: true,

			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});

	$('.js-Popup--video').magnificPopup({
		type: 'iframe'
	});

	var $main = $('.Main');
	$main.imagesLoaded( function() {
		$('html').addClass('is-loaded');
	});

	//
	// Clickable dropdowns (touch4evah)
	//

	// $('.has-dropdown').children('a').click(function(event) {
	// 	event.preventDefault();
	// 	$(this).parent().toggleClass('js-hover');
	// });

});
