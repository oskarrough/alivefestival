import {sort} from '@ember/object/computed'
import Controller from '@ember/controller'

export default Controller.extend({
	sortDefinition: ['acf.festival_date'],
	sortedArtists: sort('model.artists', 'sortDefinition')
})
