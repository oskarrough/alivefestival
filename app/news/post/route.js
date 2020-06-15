import Route from '@ember/routing/route'

export default Route.extend({

	model(params) {		
		return this.store
			.query('post', {slug: params.post_slug})
			.then(models => models.get('firstObject'))
	},

	serialize(model) {
		return {post_slug: model.get('slug')}
	}
})
