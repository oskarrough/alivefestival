$(document).ready(function() {

	// loading
	var $main = $('.Main');
	$main.imagesLoaded(function() {
		$('html').addClass('is-loaded');
	});

	$('.js-Popup--artist').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			preload: [0,2], // read about this option in next Lazy-loading section
			navigateByImgClick: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});

	$('.js-Popup--video').magnificPopup({
		type: 'iframe'
	});

	// Clickable dropdowns (touch4evah)
	// $('.has-dropdown').children('a').click(function(event) {
	// 	event.preventDefault();
	// 	$(this).parent().toggleClass('js-hover');
	// });

	if ($('.Splash').length) {

		// initializes BigVideo
		var BV = new $.BigVideo({
			controls: false,
			doLoop: true
		});
		BV.init();

		// if (!Modernizr.touch) {}
		BV.show([
			{ type: 'video/mp4',  src: 'images/2015/alive-bg.mp4' },
			{ type: 'video/webm', src: 'images/2015/alive-bg.webm' },
			{ type: 'video/ogg',  src: 'images/2015/alive-bg.ogv' }
		]);

		BV.getPlayer().one('loadeddata', function() {
			$('#big-video-wrap').addClass('is-loaded');
		});
	}
});
