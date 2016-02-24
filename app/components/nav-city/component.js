import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	cityChooser: inject.service(),

	actions: {
		changeCity() {
			this.toggleProperty('cityChooser.isExpanded');
		}
	}
});
