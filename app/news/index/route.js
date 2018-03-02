import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		if (this.get('cached')) return this.get('cached')
		return hash({
			posts: this.store.query('post', {per_page: 99}),
			page: this.store.findRecord('page', 120)
		}).then(model => {
			this.set('cached', model)
			return model
		})
	}
})
