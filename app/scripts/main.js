$(document).ready(function() {


	// $('#zlayer').zlayer([
	// 	{
	// 		layer:'.background',
	// 		mass:15,
	// 		confine:'y'
	// 	},
	// 	{
	// 		layer:'.guy',
	// 		mass:8,
	// 		force:'push'
	// 	},
	// 	{
	// 		layer:'.guys',
	// 		mass:10,
	// 		force:'pull'
	// 	}
	// ], {
	// 	repositionTransition:'all 2.5s ease-in'
	// });

	// Clickable dropdowns (touch4evah)
	// -------------------------------
	$('.DropdownParent').children('a').click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('js-hover');
	});

	var primaryLink = $('.Navigation--primary').children('li').hover( function() {
		$('body').addClass('speedy');
	}, function() {
		$('body').removeClass('speedy');
	});


	// Custom selects
	// -------------------------------
	//$('select').customSelect();


	// Recipes
	// -------------------------------
	var container = document.querySelector('#js-PackeryRecipes');
	if ($(container).length > 0) {
		var pckry = new Packery( container, {
			itemSelector: '.Recipe',
			gutter: 30
		});
	}

	//
	// 
	function scrollToTop(speed) {
		$('.js-scrollToTop').text('Rewinding');
		
		$('html, body').animate({
			scrollTop: 0
		}, 'slow', function(){
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
