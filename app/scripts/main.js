$(document).ready(function() {

	$zcanvas = $('#zlayer');
	if ($zcanvas.length > 0) {
		$zcanvas.zlayer([
			{
				layer: '.Layer1',
				mass: 20,
				confine: 'y'
			},
			{
				layer: '.Layer2',
				mass: 7,
				force: 'push'
			},
			{
				layer: '.Layer3',
				mass: 11,
				force: 'pull'
			},
			{
				layer: '.Layer4',
				mass: 120,
				force: 'push'
			},
			{
				layer: '.Layer-logo',
				mass: 60
			}
		], {
			repositionTransition:'all 500s ease-in'
		});
	}


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
