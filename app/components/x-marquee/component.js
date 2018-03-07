import Component from '@ember/component'
import Marquee3k from 'npm:marquee3000'

export default Component.extend({
  classNames: ['marquee3k'],

	speed: 0.25,
	reverse: false,
	pausable: true,

  attributeBindings: [
    'speed:data-speed',
    'reverse:data-reverse',
    'pausable:data-pausable'
  ],

  didInsertElement() {
    Marquee3k.init()
  }
})
