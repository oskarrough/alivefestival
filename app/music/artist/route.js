import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
	// AND => https://example.com/cms/wp-json/pages?filter[tag]=L1,L2,L3
	// OR => https://example.com/cms/wp-json/pages?filter[tag]=L1+L2+L3

	model(params) {
		return this.store.query('artist', {
			filter: {
				name: params.artist_slug
			}
		}).then(models => models.get('firstObject'));
	},

	serialize(model) {
		return {artist_slug: model.get('slug')};
	}
});
