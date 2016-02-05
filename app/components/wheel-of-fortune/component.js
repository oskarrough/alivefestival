import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'WheelOfFortune',
	isLoading: false,
	classNameBindings: ['isLoading'],

	actions: {
		spinIt() {
			const $btn = this.$('.WheelOfFortune-btn');
			$btn.addClass('shake2 shake-constant2');
			const promise = this.get('onSpin')();

			promise.then(data => {
				$btn.removeClass('shake2 shake-constant2');
				this.set('item', data.get('firstObject'));


				Ember.run.schedule('afterRender', this, function () {
					this.$('h3').each(function (index) {
						let $this = $(this);
						let text = $this.text();
						let characters = text.split('');
						console.log(text);
						$this.empty();
						$.each(characters, function (i, el) {
							console.log(el);
							$this.append(`<span class="Letter">${el}</span`);
						});
					});
				});
			});
		}
	},


});
