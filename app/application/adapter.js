import DS from 'ember-data'

export default DS.RESTAdapter.extend({
	host: 'https://cms.alivefestival.dk',
	namespace: 'wp-json/wp/v2'
})
