import {inject as service} from '@ember/service'
import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	moment: service(),
	model() {
		return hash({
			locale: this.get('moment').changeLocale('da'),
			page: this.store.findRecord('page', 2407),
		})
		
	
	}
})


