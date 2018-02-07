import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 67),
			artists: this.store.query('artist', {per_page: 99}),
			news: this.store.query('post', {per_page: 2})
		})
	}
})
