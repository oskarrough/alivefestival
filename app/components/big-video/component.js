/* global Modernizr */
import Ember from 'ember';
import imagesLoaded from 'npm:imagesLoaded';

const {$, Component, on} = Ember;

export default Component.extend({
	classNames: ['BackgroundVideo'],

	videoBig: on('didInsertElement', function () {
		const BV = new $.BigVideo({useFlashForFirefox: false});
		const videoSource = [
			{type: 'video/mp4',  src: this.get('src')},
			{type: 'video/webm', src: this.get('srcwebm')},
			{type: 'video/ogg',  src: this.get('srcogg')}
		];

		// Store an instance for other methods
		this.set('BV', BV);

		BV.init();

		if (Modernizr.touchevents) {
			BV.show('assets/images/barguide.png');
		} else {
			BV.show(videoSource, {ambient: true});
		}
	}),

	videoDestroy: on('willDestroyElement', function () {
		this.get('BV').dispose();
	})
});
