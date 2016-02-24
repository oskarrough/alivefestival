import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',
	classNames: ['SectionBox'],
	classNameBindings: ['isOpen'],
	isOpen: false,

	actions: {
		toggleBody() {
			this.toggleProperty('isOpen');
		}
	}
});
