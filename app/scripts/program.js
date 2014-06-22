/**
 * Dynamic grid with Masonry
 */

$(function () {

	// check for masonry and start
	var $container = $('#Masonry');
	if (!$container.length) {
		return false;
	}

	runMasonry();

});

function runMasonry() {

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
}
