import Component from '@ember/component'
import loadjs from 'npm:loadjs'

export default Component.extend({
	didInsertElement() {
		loadjs('//lightwidget.com/widgets/lightwidget.js')
	}
})
