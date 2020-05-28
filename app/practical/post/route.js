import Route from '@ember/routing/route'

export default Route.extend({
	model(params) {
		return this.store
			.query('post', {filter: {slug: params.slug}})
			.then(query => query.get('firstObject'))
	},
	serialize(model) {
		return {post_slug: model.get('slug')}
	}
})
