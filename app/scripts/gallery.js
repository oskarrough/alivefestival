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
	}, 40000, 'linear');

	return false;
}

function scrollStop() {
	$('html, body').stop();
	$('.js-scrollToBottom').text('Play');
	return false;
}

function hideMenuOnScroll() {
	var $primaryNav = $('.Navigation--primary');

	$(window).scroll(function(){
		$primaryNav.addClass('is-hidden');

		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			$primaryNav.removeClass('is-hidden');
		}, 750));
	});
}

$(document).ready(function() {
	if ( $('.page-Gallery').length > 0 ) {
		hideMenuOnScroll();
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
