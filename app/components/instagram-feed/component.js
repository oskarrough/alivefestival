/* global loadJS */
import Component from '@ember/component';

export default Component.extend({
	didInsertElement() {
		loadJS('//lightwidget.com/widgets/lightwidget.js');
	}
});
