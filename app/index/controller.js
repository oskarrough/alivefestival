import Ember from 'ember';

const {run} = Ember;

export default Ember.Controller.extend({
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
