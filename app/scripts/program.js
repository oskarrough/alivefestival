/**
 * Dynamic grid with Masonry
 */

function goGrid() {
	var $container = $('#Masonry');
	if ($container.length > 0) {
		$container.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');
		$container.masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.Artist'
		});
	}
}

$(function () {

	var $container = $('#Masonry');
	if ($container.length > 0) {
		goGrid();
	}

	var $artists = $('.Masonry').find('.Artist');
	$artists.each(function(index, el){
		$(this).imagesLoaded( function() {
			$(el).addClass('is-loaded');
		});
	});
});
