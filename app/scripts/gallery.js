function scrollToTop(speed) {
	$('.js-scrollToTop').text('Rewinding');

	$('html, body').animate({
		scrollTop: 0
	}, 600, function(){
		$('.js-scrollToTop').text('Rewind');
	});

	return false;
}

function scrollToBottom(speed) {
	$('.js-scrollToBottom').text('Playing');

	$('html, body').animate({
		scrollTop: $(document).height()
	}, 50000, 'linear');

	return false;
}

function scrollStop() {
	$('html, body').stop();
	$('.js-scrollToBottom').text('Play');
	return false;
}

// function hideMenuOnScroll() {
// 	var $primaryNav = $('.Navigation--primary');

// 	$(window).scroll(function(){
// 		$primaryNav.addClass('is-hidden');

// 		clearTimeout($.data(this, 'scrollTimer'));
// 		$.data(this, 'scrollTimer', setTimeout(function() {
// 			$primaryNav.removeClass('is-hidden');
// 		}, 750));
// 	});
// }

$(function(){

	// if ( $('.page-Gallery').length > 0 ) {
	// 	hideMenuOnScroll();
	// }

	var $container = $('.Gallery');
	if ($container.length > 0) {

		// Lazy loaded images
		var bLazy = new Blazy({
			selector: '.Gallery img'
		});

		// Masonry gallery
		$container.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');
		$container.masonry({
			columnWidth: 200,
			gutter: 2,
			itemSelector: 'img'
		});
	}

	$('.js-scrollToTop').click(function(event){
		scrollToTop();
	});
	$('.js-scrollToBottom').click(function(event){
		scrollToBottom();
	});
	$('.js-stop').click(function(event){
		scrollStop();
	});
});
