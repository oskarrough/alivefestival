import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 574), // the "spilleplan" page
			artists: this.store.query('artist', {
				filter: {
					category_name: '2017'
				},
				per_page: 99
			})
		})
	}
})
