import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		return hash({
			page: this.store.findRecord('page', 120),
			posts: this.store.query('post', {per_page: 99})
		})
	}
})
