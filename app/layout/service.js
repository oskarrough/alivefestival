/* global document */
import Ember from 'ember';
// import Cookies from 'ember-cli-js-cookie';

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
		console.log('perhapscloseaside');
		if (this.get('smallScreen')) {
			console.log('closing');
			this.set('showAside', false);
		}
	}
});

// // isPanelLeftVisible: true,
// isPanelLeftVisible: computed({
// 	get() {
// 		if (this.get('smallScreen')) {
// 			return false;
// 		}

// 		// if the cookie is undefined (not set), it returns true
// 		// or if the cookie has 'true' as value, return true
// 		const noCookie = Cookies.get('isPanelOpen') === undefined;
// 		return noCookie || Cookies.get('isPanelOpen') === 'true';
// 	},
// 	set(key, value) {
// 		Cookies.set('isPanelOpen', value, {expires: 7});
// 		return value;
// 	}
// }),
// togglePanelLeft() {
// 	this.toggleProperty('isPanelLeftVisible');
// }
