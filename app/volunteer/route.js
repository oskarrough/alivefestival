import {hash} from 'rsvp'
import Route from '@ember/routing/route'


export default Route.extend({
	
	
	model() {
		return hash({
			samarbejdsteaser: this.store.findRecord('page', 302),
			page: this.store.findRecord('page', 2598)
	})
}
})
