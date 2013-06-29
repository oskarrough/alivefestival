$(function() {

	/* Nav highlighting */
	$('.History')
	.waypoint(function(direction) {
		var $links = $('.Navigation--history a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'down');

	}, {
		offset: '90%'
	})
	.waypoint(function(direction) {
		var $links = $('a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'up');
	}, {
		offset: function() {
			return -$(this).height();
		}
	});
  	// make sure waypoints are correct
  	$.waypoints('refresh');


	/* Generate a menu from the content on the page */
	var $nav = $('.Navigation--history').html('');
	$('.History').each(function(element){
		myID = $(this).attr('id');

		if (myID) {
			$nav.append('<li><a href="#'+myID+'"> '+myID+' </a></li>');
		}
	});

	/* Smooth scrolling instead of jumping */
	$nav.find('a').on('click', jump);
	function jump(event) {
		var $active = $(event.currentTarget);
		var offset = $( $active.attr('href') ).offset().top;
		$('html, body').animate({
			scrollTop: offset
		}, 300, function() {
		});
	}

});