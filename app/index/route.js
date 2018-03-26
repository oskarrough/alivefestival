import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 67),
			news: this.store.query('post', {per_page: 2}),
			artists: this.store.query('artist', {
				filter: {
					category_name: '2018'
				},
				per_page: 99
			})
		})
	}
})
