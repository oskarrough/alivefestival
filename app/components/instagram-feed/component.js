/* global loadJS */
import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		loadJS('//lightwidget.com/widgets/lightwidget.js');
	}
});
