import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			page: this.store.findRecord('page', 574), // the "spilleplan" page
			artists: this.store.query('artist', {
				filter: {
					category_name: '2017'
				},
				per_page: 99
			})
		});
	}
});
