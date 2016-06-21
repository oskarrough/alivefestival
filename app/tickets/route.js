import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	model() {
		return this.store.findRecord('page', 12);
	},

	activate() {
		this.set('layout.billetter', true);
		this.set('layout.simplify', true);
	},
	deactivate() {
		this.set('layout.billetter', false);
		this.set('layout.simplify', false);
	}
});
