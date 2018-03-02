import Component from '@ember/component'

export default Component.extend({
	openAll: false,

	actions: {
		openAllSections() {
			this.toggleProperty('openAll')
		}
	}
})
