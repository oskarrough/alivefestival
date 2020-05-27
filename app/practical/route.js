import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 2651),
			// practical: this.store.query('post', {
			// 	categories: 30
			// })
			practical: this.store.findAll('faq')
		})
	}

})
