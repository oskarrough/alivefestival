import Component from '@ember/component'
import $ from 'jquery'

export default Component.extend({
	classNames: 'WheelOfFortune',
	isLoading: false,
	classNameBindings: ['isLoading'],

	enableLettersOnTitle(text) {
		let characters = text.split('')
		let $el = this.$('.WheelOfFortune-title')
		$el.empty()
		$.each(characters, function(i, el) {
			$el.append(`<span class="Letter">${el}</span`)
		})
	},

	actions: {
		spinIt() {
			const $btn = this.$('.WheelOfFortune-btn')
			$btn.addClass('shake2 shake-constant2')
			const promise = this.get('onSpin')()
			promise.then(data => {
				$btn.removeClass('shake2 shake-constant2')
				this.set('item', data.get('firstObject'))
				this.enableLettersOnTitle(this.get('item.title'))
			})
		}
	}
})
