import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['showAside'],
	actions: {
		toggleAside() {
			this.toggleProperty('showAside');
		}
	}
});
