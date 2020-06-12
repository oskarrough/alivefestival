import Route from '@ember/routing/route'

export default Route.extend({
	model(params) {
		return this.store
			.query('faq', {filter: {slug: params.faq_slug}})
			.then(query => query.get('firstObject'))
	},
	serialize(model) {
		return {post_slug: model.get('slug')}
	}
	// model(params) {
	// 	return this.store
	// 		.query('artist', {slug: params.artist_slug})
	// 		.then(models => models.get('firstObject'))
	// },

	// serialize(model) {
	// 	return {artist_slug: model.get('slug')}
	// }
})
