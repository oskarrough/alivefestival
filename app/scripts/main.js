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

});
