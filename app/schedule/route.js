import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	model() {
		if (this.get('cached')) return this.get('cached')
		// /artists?filter[cat]=12 or /posts?filter[category_name]=jazz_funk
		return hash({
			page: this.store.findRecord('page', 574),
			artists: this.store.query('artist', {

				categories: ['10'],

				per_page: 99
			})
		}).then(model => {
			this.set('cached', model)
			return model
		})
	}
})
