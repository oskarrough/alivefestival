$(document).ready(function() {

	$('.js-Popup--artist').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,

			preload: [0,2], // read about this option in next Lazy-loading section

			navigateByImgClick: true,

			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});

	$('.js-Popup--YouTube').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

					id: 'v=', // String that splits URL in a two parts, second part should be %id%
					// Or null - full URL will be returned
					// Or a function that should return %id%, for example:
					// id: function(url) { return 'parsed id'; } 

					src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

				// you may add here more sources
			},

			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});



	var $nav = $('.Navigation--primary');
	$('.page-Index').find($nav).removeClass('is-hidden');

	var $main = $('.l-Main');
	if ($main.find('img').length > 0) {
		$main.imagesLoaded( function() {
			$('html').addClass('loaded');
			//console.log('images loaded');
		});
	} else {
		$('html').addClass('loaded');
	}

	var $zcanvas = $('#zlayer');
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
				layer: '.Layer5',
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

});
