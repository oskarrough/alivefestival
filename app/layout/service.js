/* global document */
import Ember from 'ember';

const BREAKPOINT = 740;
const {computed, on} = Ember;

export default Ember.Service.extend({
	showAside: false,
	billetter: false,
	simplify: false,

	setInitialWidth: on('init', function () {
		const xBrowserWidth = document.querySelector('body').getBoundingClientRect().width;
		this.set('initialWidth', xBrowserWidth);
	}),

	// 513px is our current breakpoint for panel to be full width.
	smallScreen: computed('initialWidth', function () {
		return this.get('initialWidth') < BREAKPOINT;
	}),

	// Only close if we're on a small screen.
	perhapsCloseAside() {
		if (this.get('smallScreen')) {
			this.set('showAside', false);
		}
	}
});
