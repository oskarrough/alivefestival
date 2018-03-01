import Component from '@ember/component';

export default Component.extend({
	openAll: false,

	actions: {
		openAll() {
			this.toggleProperty('openAll')
		}
	}
});
