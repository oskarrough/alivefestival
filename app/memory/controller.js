import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		refreshModel() {
			return this.store.query('memory', {
				filter: {orderby: 'rand', posts_per_page: 1}
			});
		}
	}
});
