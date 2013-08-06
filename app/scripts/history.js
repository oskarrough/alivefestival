$(function() {

	// only continue if we're on the right page
	if( $('.Page--Historie').length === 0 ) {
		return;
	}

	// Element that marks a section
	$('.Link--Historie').append('<ul class="Navigation Dropdown Navigation--history"></ul>');
	var $waypoint = $('.History');

	// Wrapper for the generated menu
	var $waypointNav = $('.Navigation--history');


	//
	// Generate a menu from the content on the page
	//
	$waypointNav.html('');
	$waypoint.each( function() {
		var myID = this.id;

		if (myID) {
			$waypointNav.append('<li><a href="#' + myID + '">' + myID + '</a></li>');
		}
	});


	//
	// Nav highlighting
	//
	$waypoint
	.waypoint(function(direction) {
		var $links = $waypointNav.find('a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'down');
	}, {
		offset: '100%'
	})
	.waypoint(function(direction) {
		var $links = $waypointNav.find('a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'up');
	}, {
		offset: function() {
			return -$(this).height();
		}
	});

	// make sure waypoints are correct
	//$.waypoints('refresh');


	//
	// Smooth scrolling instead of jumping
	//
	function jump(event) {
		var $active = $(event.currentTarget);
		var offset = $( $active.attr('href') ).offset().top;
		$('html, body').animate({
			scrollTop: offset
		}, 300, function() {
		});
	}
	$waypointNav.find('a').on('click', jump);
});
