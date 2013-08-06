//
// Slideshows
//

$('.Slideshow').royalSlider({
	arrowsNav: true,
	loop: true,
	keyboardNavEnabled: true,
	arrowsNavAutoHide: true,
	autoScaleSlider: true,
	autoScaleSliderWidth: 600,
	autoScaleSliderHeight: 400,
	thumbsFitInViewport: true,
	navigateByClick: true,
	startSlideId: 0,
	autoPlay: true,
	transitionType:'move',
	globalCaption: false,
	imageScalePadding: 0,
	controlNavigation: 'none',
	thumbs: {
		// drag: false,
		// touch: false,
		// arrows: false,
		//autoCenter: false,
		orientation: 'horizontal',
		//spacing: 0
	}
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
    
    // imageScaleMode: 'fill',
    // imageAlignCenter: true,
    slidesSpacing: 0,
    
    autoScaleSlider: true,
    // autoScaleSliderWidth: 960,
    // autoScaleSliderHeight: 450,

    thumbs: {
		autoCenter: false,
		fitInViewport: true,
		orientation: 'vertical',
		spacing: 0,
		paddingBottom: 0
    },
	
	autoPlay: {
		enabled: true,
		pauseOnHover: true
	}
});