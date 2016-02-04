import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			page: this.store.findRecord('page', 67),
			artists: this.store.findAll('artist')
		})
	}
});
