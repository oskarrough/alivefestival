$(document).ready(function() {
	var $splash = $('.Splash');

	// guard
	if ($splash.length < 1) {
		return false;
	}

	// initialize BigVideo
	var BV = new $.BigVideo({
		controls: false,
		doLoop: true
	});

	BV.init();

	// if (!Modernizr.touchvents) {}
	BV.show([
		{ type: 'video/mp4',  src: 'images/2015/alive-bg.mp4' },
		{ type: 'video/webm', src: 'images/2015/alive-bg.webm' },
		{ type: 'video/ogg',  src: 'images/2015/alive-bg.ogv' }
	]);

	BV.getPlayer().one('loadeddata', function() {
		$('#big-video-wrap').addClass('is-loaded');
	});
});
