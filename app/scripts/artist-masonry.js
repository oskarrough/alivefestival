/**
 * Dynamic grid with Masonry
 */

function artistMasonry() {
	// do masonry
	var $container = $('#Masonry');
	$container.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');
	$container.masonry({
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		itemSelector: '.Artist'
	});

	// layout again after all images are loaded
	$container.imagesLoaded( function(){
		$container.masonry();
	});

	// fade in each masonry item as they load
	var $artists = $('.Masonry').find('.Artist');
	$artists.each(function(index, el){
		$(this).imagesLoaded( function() {
			$(el).addClass('is-loaded');
		});
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
}
