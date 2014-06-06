//
// Slideshows
//

$('.Slideshow').royalSlider({

	imageScalePadding: 0,
	autoScaleSlider: true,
	autoScaleSliderWidth: 428,
	autoScaleSliderHeight: 315,

	transitionType: 'move',
	transitionSpeed: 600,
	randomizeSlides: true,
	globalCaption: false,
	loop: true,
	// navigateByClick: true,

	keyboardNavEnabled: false,
	arrowsNav: true,
	arrowsNavAutoHide: true,
	controlNavigation: 'none',

	// thumbsFitInViewport: true,
	// startSlideId: 0,

	autoPlay: {
		enabled: true,
		delay: 2000
	}

	// controlNavigation: 'none',
	// thumbs: {
	// 	// drag: false,
	// 	// touch: false,
	// 	// arrows: false,
	// 	//autoCenter: false,
	// 	orientation: 'horizontal',
	// 	//spacing: 0
	// }
});
//$('.Slideshow').data('royalSlider').updateSliderSize(true);

//
// Slideshow with titles as tabs
//
$('.Slideshow--tabs').royalSlider({
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
