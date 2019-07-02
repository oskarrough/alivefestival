import Component from '@ember/component'
import $ from 'jquery'

export default Component.extend({
	didInsertElement() {
		this.$('.Letter').on('mouseenter', function() {
			$(this).addClass('shake2 shake-constant2')
			$(this)
				.delay(4000)
				.queue(function() {
					$(this)
						.removeClass('shake2 shake-constant2')
						.clearQueue()
				})
		})
	}
})
