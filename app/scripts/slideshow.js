/**
 * Slideshows with royalslider
 */

$('.js-Slideshow--visibleNearby').royalSlider({
	autoPlay: {
		enabled: true,
		delay: 2000,
		stopAtAction: false
	},
	visibleNearby: {
		enabled: true,
		centerArea: 0.5,
		center: true,
		breakpoint: 650,
		breakpointCenterArea: 0.64,
		navigateByCenterClick: true
	}
});

$('.js-Slideshow').royalSlider({
	imageScalePadding: 0,
	imageScaleMode: 'fill', // fit-if-smaller, fill
	autoScaleSlider: true,
	autoScaleSliderWidth: 428,
	autoScaleSliderHeight: 315,
	transitionType: 'move',
	transitionSpeed: 600,
	randomizeSlides: true,
	loop: true,
	globalCaption: true,
	// navigateByClick: true,
	keyboardNavEnabled: false,
	arrowsNav: true,
	arrowsNavAutoHide: true,
	controlNavigation: 'none',
	// thumbsFitInViewport: true,
	// startSlideId: 0,
	autoPlay: {
		enabled: true,
		delay: 2000,
		stopAtAction: false
	}
});


// Slideshow with titles as tabs
$('.js-Slideshow--tabs').royalSlider({
    fadeinLoadedSlide: true,

    arrowsNav: false,
    keyboardNavEnabled: true,

    controlNavigation: 'thumbnails',
    controlNavigationSpacing: 0,

    //globalCaption: true,

    //imageScaleMode: 'fill',
    // imageAlignCenter: true,
    slidesSpacing: 0,

    autoScaleSlider: true,
    // autoScaleSliderWidth: 960,
    // autoScaleSliderHeight: 450,

    thumbs: {
		autoCenter: false,
		fitInViewport: true,
		orientation: 'vertical',
		spacing: 3,
		paddingBottom: 0
    },

	autoPlay: {
		enabled: false,
		pauseOnHover: true
	}
});
