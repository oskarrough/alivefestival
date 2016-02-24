import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://2016.alivefestival.dk',
	namespace: 'wp-json/wp/v2'
});
