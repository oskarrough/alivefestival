import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

const sections = [
	{title: 'one', body: 'body one'},
	{title: 'two', body: 'body two'},
	{title: 'three', body: 'body three'}
]

module('Integration | Component | section-box-wrapper', function(hooks) {
	setupRenderingTest(hooks)

	test('it renders', async function(assert) {
		this.set('sections', sections)
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`{{section-box-wrapper sections=sections}}`)
		assert.equal(this.element.querySelectorAll('.SectionBox').length, 3)
	})
})
