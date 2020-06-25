import Route from '@ember/routing/route'

export default Route.extend({
	// AND => https://example.com/cms/wp-json/pages?filter[tag]=L1,L2,L3
	// OR => https://example.com/cms/wp-json/pages?filter[tag]=L1+L2+L3

	model(params) {
		console.log(params.artist_slug);
		
		return this.store
			.query('artist', {slug: params.artist_slug})
			.then(models => models.get('firstObject'))
	},

	serialize(model) {
		return {artist_slug: model.get('slug')}
	}
})


