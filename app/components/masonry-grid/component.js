import $ from 'jquery';
import { later } from '@ember/runloop';
import Component from '@ember/component';
import Packery from 'npm:packery';
import imagesLoaded from 'npm:imagesloaded';

export default Component.extend({
	classNames: ['Masonry'],

	init() {
		this._super(...arguments)
		this.set('config', {
			transitionDuration: '0.3s',
			percentPosition: true
		})
	},

	// runs every time the view updates (so also when a dom element is removed)
	didRender() {
		// Ember.debug('didRender');
		this.disableGrid();
		later(() => {
			imagesLoaded(this.element, this.enableGrid.bind(this));
		}, 100);
	},

	willDestroyElement() {
		this.disableGrid();
	},

	enableGrid() {
		const instance = new Packery(this.element, this.get('config'));
		this.set('instance', instance);
		this.$().addClass('is-active');
		// this.animateIn();
	},

	disableGrid() {
		if (this.get('instance')) {
			this.get('instance').destroy();
			this.set('instance', null);
		}
	},

	// Fade in items one after another as the images load
	animateIn() {
		const $cells = this.$().find('.Grid-cell');
		$cells.each(function (index, cell) {
			imagesLoaded(cell, function () {
				$(cell).addClass('is-loaded');
			});
		});
	}
});
