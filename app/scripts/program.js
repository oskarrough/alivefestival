//
// Dynamic grid with Masonry
//

$(function () {
	
	var $main = $('.l-Main');
	if ($main.find('img').length > 0) {
		$main.imagesLoaded( function() {
		  $('html').addClass('loaded');
		  console.log('images loaded');
		  goGrid();
		});
	} else {
		$('html').addClass('loaded');
	}


});

function goGrid() {
	var $container = $('#js-masonry');
	if ($container.length > 0) {
		console.log('gogrid');

		$container.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');
		$container.masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.Artist'
		});
	}
}
