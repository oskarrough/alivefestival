import {inject as service} from '@ember/service'
import Component from '@ember/component'
import {get} from '@ember/object'

export default Component.extend({
	tagName: 'aside',
	classNames: ['Aside'],
	layout: service(),

	click(event) {
		const layout = get(this, 'layout')
		const showAside = get(layout, 'showAside')
		const clickedElementHasAnHref = event.target.href

		if (clickedElementHasAnHref && showAside) {
			layout.perhapsCloseAside()
		}
	}
})
