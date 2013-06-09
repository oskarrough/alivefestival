function onLayout() {
	console.log('layout done');
}

// initialize Packery
var container = document.querySelector('#js-packery');

if ($(container).length > 0) {

	var pckry = new Packery( container, {
		// options
		itemSelector: '.Artist',
		gutter: '.gutter-sizer',
		columnWidth: '.grid-sizer'
	});
	// layout Packery after all images have loaded
	imagesLoaded( container, function() {
		pckry.layout();
	});


	// bind event listener
	pckry.on( 'layoutComplete', onLayout );
	// un-bind event listener
	pckry.off( 'layoutComplete', onLayout );

	// return true to trigger an event listener just once
	pckry.on( 'layoutComplete', function() {
		$(container).addClass('packery-done');
		return true;
	});

//var $container = $('#js-packery');
//var pckry = Packery.data( $container );
/*
imagesLoaded( $container, function() {

	$container.packery({
		itemSelector: '.Artist',
		gutter: '.gutter-sizer',
		columnWidth: '.grid-sizer'
	}).addClass('packery-done');

	$container.packery( 'on', 'layoutComplete', function() {
		console.log('test1');
	});

});


*/
}
