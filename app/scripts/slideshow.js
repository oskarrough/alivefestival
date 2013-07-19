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
    arrowsNav: false,
    fadeinLoadedSlide: true,
    controlNavigationSpacing: 0,
    controlNavigation: 'thumbnails',
    thumbs: {
		autoCenter: false,
		fitInViewport: true,
		orientation: 'vertical',
		spacing: 0,
		paddingBottom: 0
    },
    keyboardNavEnabled: true,
    imageScaleMode: 'fill',
    imageAlignCenter:true,
    slidesSpacing: 0,
    loop: false,
    loopRewind: true,
    numImagesToPreload: 3,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 450,

    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    //imgWidth: 640,
    //imgHeight: 360

  });