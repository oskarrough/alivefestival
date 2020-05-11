import {inject as service} from '@ember/service'
import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	moment: service(),
	model() {
		// change catergory 11 to catergory 12 for practical info		
		return hash({
			locale: this.get('moment').changeLocale('da'),
			page: this.store.findRecord('page', 2407),
		})
		
	
	}
	
	
})


// beforeModel() {
// 	console.log(this.store.findRecord('page', 67));
	
	
// 	this.get('moment').changeLocale('da')
// }