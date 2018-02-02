import {inject as service} from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
	moment: service(),
	beforeModel() {
		this.get('moment').changeLocale('da')
	}
})
