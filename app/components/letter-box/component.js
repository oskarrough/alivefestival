import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		this.$('.Letter').on('mouseenter', function() {
			$(this).addClass('shake2 shake-constant2');
			$(this).delay(4000).queue(function() {
				$(this).removeClass('serif shake2 shake-constant2').clearQueue();
			});
		});
	}
});
