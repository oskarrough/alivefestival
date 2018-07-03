import Component from '@ember/component'
import {sort} from '@ember/object/computed'

export default Component.extend({
	init() {
		this._super(...arguments)
		this.set('sortDefinition', ['acf.festival_date'])
	},
	sortedArtists: sort('artists', 'sortDefinition')
})
