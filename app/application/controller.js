import Ember from 'ember';

export default Ember.Controller.extend({
	showAside: true,
	actions: {
		toggleAside() {
			this.toggleProperty('showAside');
		}
	}
});
