import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	
	model() {
		
		return hash({
			page: this.store.findRecord('page', 67),
			news: this.store.query('post', {per_page: 6}),
			artists: this.store.query('artist', {
				// categories: '7',
				per_page: 10
			})
		})
	
	}
	
})
