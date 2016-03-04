import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNameBindings: ['layout.showAside'],
	actions: {
		toggleAside() {
			this.toggleProperty('layout.showAside');
		}
	}
});
