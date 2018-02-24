import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | wheel of fortune', function(hooks) {
	setupRenderingTest(hooks)

	test('it renders', async function(assert) {
		await render(hbs`{{wheel-of-fortune}}`)
		assert.equal(1, 1)
	})
})
