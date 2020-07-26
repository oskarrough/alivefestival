import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		if (this.get('cached')) return this.get('cached')
		return hash({
			page: this.store.findRecord('page', 67),
			news: this.store.query('post', {
				per_page: 8
			}),
			artists: this.store.query('artist', {
				categories: 10,
				per_page: 6
			}),
			activites: this.store.query('artist', {
				categories: 11,
				per_page: 4
			}),
			practical: this.store.query('FAQ', {
				per_page: 10
			})
		}).then(model => {
			this.set('cached', model)
			return model
		})
	}
})
