import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',
	classNames: ['SectionBox'],
	classNameBindings: ['bodyIsHidden'],
	bodyIsHidden: true,

	actions: {
		toggleBody() {
			this.toggleProperty('bodyIsHidden');
		}
	}
});
