import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.query('post', {filter: {name: params.slug}})
			.then(query => query.get('firstObject'));
	},
	serialize(model) {
		return {post_slug: model.get('slug')};
	}
});
