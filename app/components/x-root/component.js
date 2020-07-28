/* global document */
import {inject as service} from '@ember/service'

import Component from '@ember/component'
import {run} from '@ember/runloop'

export default Component.extend({
	layout: service(),
	classNameBindings: ['layout.showAside'],

	actions: {
		toggleAside() {
			this.toggleProperty('layout.showAside')
		},
		untoggleAside() {
			let openMenu = document.getElementsByClassName("show-aside");
			if(openMenu.length>0){
				this.toggleProperty('layout.showAside')
			}
			
		}
	},

	didInsertElement() {
		run.scheduleOnce('afterRender', () => this.removeLoadingScreen())
	},

	// Remove our dummy app with inline styles.
	removeLoadingScreen() {
		const dummy = document.querySelector('.LoadingScreen')
		if (!dummy) {
			return
		}
		dummy.parentNode.removeChild(dummy)
	}
})
