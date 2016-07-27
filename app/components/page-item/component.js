import Ember from 'ember';

export default Ember.Component.extend({
	layout: Ember.inject.service(),
	classNames: ['Page'],
	classNameBindings: ['layout.billetter', 'partyOn'],

	actions: {
		partyOn() {
			this.toggleProperty('partyOn');
		}
	}
});
