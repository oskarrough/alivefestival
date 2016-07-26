/* global document */
import Ember from 'ember';

const {Component, inject, run} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNameBindings: ['layout.showAside'],

	actions: {
		toggleAside() {
			this.toggleProperty('layout.showAside');
		}
	},

	didInsertElement() {
		run.scheduleOnce('afterRender', () => this.removeLoadingScreen());
	},

	// Remove our dummy app with inline styles.
	removeLoadingScreen() {
		const dummy = document.querySelector('.LoadingScreen');
		if (!dummy) {
			return;
		}
		dummy.parentNode.removeChild(dummy);
	}
});
