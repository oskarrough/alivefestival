//
// Dynamic grid with Masonry
//

function goGrid() {
	var $container = $('#Masonry');
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

var $main = $('#Main');
if ($main.find('img').length > 0) {

	$(function () {
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
}
