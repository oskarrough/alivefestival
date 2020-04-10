import Controller from '@ember/controller'
import {run} from '@ember/runloop'

export default Controller.extend({
	
	actions: {

		updateGalleryCounter(data) {
			run.schedule('afterRender', this, function() {
				this.setProperties({
					gallerySelected: data.selected + 1,
					galleryTotal: data.total
				})
			})
		}
	}
})
