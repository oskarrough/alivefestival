import Ember from 'ember';
import Flickity from 'npm:flickity';

const {Component, debug, observer, on, run} = Ember;

// @TODO http://flickity.metafizzy.co/api.html#adding-and-removing-cells

export default Component.extend({
	classNames: ['FlickityGallery'],
	flickityOptions: {
		setGallerySize: false,
		prevNextButtons: false,
		pageDots: true,
		wrapAround: true,
		autopPay: 4000
	},

	enableFlickity: on('didInsertElement', function () {
		const images = this.get('images');

		if (!images) {
			return;
		}

		// Initialize flickity from the component element.
		const flkty = new Flickity(this.element, this.get('flickityOptions'));
		this.set('flkty', flkty);

		// Update the counter once and then on cell select.
		this.updateCounter();
		flkty.on('cellSelect', () => {
			this.updateCounter();
		});
	}),

	// Whenever `images` change, we destroy and reinitialize flickity
	imagesChanged: observer('images', function () {
		this.tryDestroyFlickity();

		run.scheduleOnce('afterRender', () => {
			this.enableFlickity();
		});
	}),

	updateCounter() {
		let flkty = this.get('flkty');

		this.sendAction('settle', {
			selected: flkty.selectedIndex,
			total: flkty.cells.length
		});
	},

	tryDestroyFlickity() {
		const flkty = this.get('flkty');

		if (!flkty) {
			debug('No gallery yet, can not destroy.');
			return;
		}

		flkty.destroy();
		this.$().find('.FlickityGallery-item').remove();
		debug('Destroyed gallery.');
	}
});
