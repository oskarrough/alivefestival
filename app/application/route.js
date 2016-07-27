import Ember from 'ember';

const {Route, inject} = Ember;

export default Route.extend({
	moment: inject.service(),
	beforeModel() {
		this.get('moment').changeLocale('da');
	}
});
