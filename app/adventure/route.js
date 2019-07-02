import Route from '@ember/routing/route'

export default Route.extend({
	beforeModel() {
		return this.replaceWith('program')
	},
	model() {
		return this.store.findRecord('page', 43)
	}
})
