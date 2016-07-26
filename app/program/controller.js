import Ember from 'ember';

export default Ember.Controller.extend({
	sortDefinition: ['acf.festival_date'],
	sortedArtists: Ember.computed.sort('model.artists', 'sortDefinition'),
});
