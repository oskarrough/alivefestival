import Component from '@ember/component'

export default Component.extend({
	tagName: 'section',
	classNames: ['SectionBox'],
	classNameBindings: ['isOpen'],
	isOpen: false,

	actions: {
		toggleBody() {
			this.toggleProperty('isOpen')
		}
	}
})
