import Ember from 'ember';

const {Controller, run} = Ember;

export default Controller.extend({
	actions: {
		updateGalleryCounter(data) {
			run.schedule('afterRender', this, function () {
				this.setProperties({
					gallerySelected: data.selected + 1,
					galleryTotal: data.total
				});
			});
		}
	}
});
