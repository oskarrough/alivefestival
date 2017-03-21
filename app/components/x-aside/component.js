import Ember from 'ember';

const {Component, get, inject} = Ember;

export default Component.extend({
	tagName: 'aside',
	classNames: ['Aside'],
	layout: inject.service(),

	click(event) {
		const layout = get(this, 'layout');
		const showAside = get(layout, 'showAside');
		const clickedElementHasAnHref = event.target.href;

		if (clickedElementHasAnHref && showAside) {
			layout.perhapsCloseAside();
		}
	}
});
