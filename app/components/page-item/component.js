import {inject as service} from '@ember/service'
import Component from '@ember/component'

export default Component.extend({
	layout: service(),
	classNames: ['Page'],
	classNameBindings: ['layout.billetter', 'partyOn'],

	// page: alivefestival/models/page

	actions: {
		partyOn() {
			this.toggleProperty('partyOn')
		}
	}
})
