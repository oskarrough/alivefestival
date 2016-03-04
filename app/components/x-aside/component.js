import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	layout: inject.service(),

	click(event) {
		const clickedElementHasAnHref = event.target.href;
		console.log(clickedElementHasAnHref);
		if (clickedElementHasAnHref && this.get('layout.showAside')) {
			this.get('layout').perhapsCloseAside();
		}
	}
	// currentBarIndex: computed('currentBar', function () {
	// 	var currentBar = this.get('currentBar');
	// 	var index = this.get('bars').indexOf(currentBar);

	// 	return index;
	// }),

	// nextBar: computed('currentBarIndex', 'bars.[]', function () {
	// 	var index = this.get('currentBarIndex');
	// 	var bars = this.get('bars');

	// 	// wrap around
	// 	index = index === bars.length - 1 ? 0 : index + 1;

	// 	return bars.objectAt(index);
	// }),

	// prevBar: computed('currentBarIndex', 'bars.[]', function () {
	// 	var index = this.get('currentBarIndex');
	// 	var bars = this.get('bars');

	// 	// wrap around
	// 	index = index === 0 ? bars.length - 1 : index - 1;

	// 	return bars.objectAt(index);
	// })
});
