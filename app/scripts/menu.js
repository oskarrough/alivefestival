$('.Navigation--primary').find('a').each(function() {

	$(this).css({ position: 'relative' }).mousemove(function(e) {

		// what is this?
		var baseExp = 3; // 2 ^ 4 == 16

		// element proportions
		var w = this.offsetWidth;
		var h = this.offsetHeight;
		var hw = w / 2;
		var hh = h / 2;

		// element position relative to page
		var offsets = $(this).offset();

		// mouse position relative to element
		var pos = {
			x: e.pageX - offsets.left,
			y: e.pageY - offsets.top
		};

		// mouse position offset from center of element
		var cx = pos.x - hw;
		var cy = pos.y - hh;

		// percentage from center to edge
		var px = Math.abs(cx / hw);
		var py = Math.abs(cy / hh);

		// new top/left positions
		var nx = Math.round(Math.pow(2, px * baseExp)) * (cx < 0 ? -1 : 1);
		var ny = Math.round(Math.pow(2, py * baseExp)) * (cy < 0 ? -1 : 1);

		$(this).css('left', nx + 'px');
		$(this).css('top', ny + 'px');

	});

	// over
	$(this).hover(function() {
		$(this).addClass('hover');
		$(this).css('z-index', 9999);
	}, function() { // out
		$(this).removeClass('hover');

		var pos = {
			x: parseInt($(this).css('left')),
			y: parseInt($(this).css('top'))
		};
		$(this).css('z-index', 1);

		$(this).animate({
			top: pos.y * -1,
			left: pos.x * -1
		}, 75, 'swing').animate({
			top: pos.y * 0.75,
			left: pos.x * 0.75
		}, 100, 'swing').animate({
			top: pos.y * -0.5,
			left: pos.x * -0.5
		}, 75, 'swing').animate({
			top: pos.y * 0.25,
			left: pos.x * 0.25
		}, 125, 'swing').animate({
			top: 0,
			left: 0
		}, 125, 'swing', function() {
			$(this).css('z-index', 0);
		});

	});
});