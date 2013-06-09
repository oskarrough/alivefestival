var $container = $('#js-packery');
imagesLoaded( $container, function() {
	$container.packery({
		itemSelector: '.Artist',
		gutter: '.gutter-sizer',
		columnWidth: '.grid-sizer'
	});
});