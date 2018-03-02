import {inject as service} from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
	layout: service(),

	model() {
		return this.store.findRecord('page', 12)
	},

	activate() {
		this.set('layout.billetter', true)
	},
	deactivate() {
		this.set('layout.billetter', false)
	}
})
