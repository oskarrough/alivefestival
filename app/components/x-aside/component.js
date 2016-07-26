import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	tagName: 'aside',
	classNames: ['Aside'],
	layout: inject.service(),

	click(event) {
		const clickedElementHasAnHref = event.target.href;
		console.log(clickedElementHasAnHref);
		if (clickedElementHasAnHref && this.get('layout.showAside')) {
			this.get('layout').perhapsCloseAside();
		}
	}
});
