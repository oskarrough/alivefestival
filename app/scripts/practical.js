$(function() {

	// only continue if we're on the right page
	if(!$('.page-Praktisk').length) {
		return;
	}

	// Element that marks a section
	$('.Link--Praktisk').append('<ul class="Navigation Dropdown Navigation--practical"></ul>');
	var $title = $('.page-Praktisk').find('.Main').find('h3');

	console.log($title.length);

	// Wrapper for the generated menu
	var $nav = $('.Navigation--practical');

	//
	// Generate a menu from the content on the page
	//
	$nav.html('');
	$title.each(function() {
		var myID = this.id;

		if (myID) {
			console.log(myID);
			$nav.append('<li><a href="#' + myID + '">' + myID + '</a></li>');
		}
	});

	$nav.waypoint(function(){
		$nav.toggleClass('is-sticky');
	}, {
		offset: '170px'
	});

	//
	// Nav highlighting
	//
	$title
	.waypoint(function(direction) {
		var $links = $nav.find('a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'down');
	}, {
		offset: '90%'
	})
	.waypoint(function(direction) {
		var $links = $nav.find('a[href="#' + this.id + '"]');
		$links.toggleClass('is-active', direction === 'up');
	}, {
		offset: function() {
			return -$(this).height();
		}
	});

	// make sure waypoints are correct
	$.waypoints('refresh');

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
	$nav.find('a').on('click', jump);
});
