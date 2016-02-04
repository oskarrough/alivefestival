import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
	model() {
		 // /artists?filter[cat]=12 or /posts?filter[category_name]=jazz_funk
		return Ember.RSVP.hash({
			page: this.store.findRecord('page', 14),
			artists: this.store.query('artist', {per_page: 999})
		});
	}
});
