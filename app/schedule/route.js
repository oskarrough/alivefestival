import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 574), // the "spilleplan" page
			artists: this.store.query('artist', {
				category: '7', // 2019
				per_page: 99
			})
		})
	}
})
