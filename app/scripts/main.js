$(document).ready(function() {


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
});
