import Component from '@ember/component'
import {inject as service} from '@ember/service'
import {computed, get} from '@ember/object'

export default Component.extend({
	layout: service(),
	classNames: ['Page'],
	classNameBindings: ['layout.billetter', 'partyOn'],

	showSections: computed('page.acf.{sections,hide_sections}', function() {
		return get(this, 'page.acf.sections') && !get(this, 'page.acf.hide_sections')
	}),

	// page: alivefestival/models/page

	actions: {
		partyOn() {
			this.toggleProperty('partyOn')
		}
	}
})
