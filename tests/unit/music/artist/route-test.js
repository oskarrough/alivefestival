import {module, test} from 'qunit'
import {setupTest} from 'ember-qunit'

module('Unit | Route | music/artist', function(hooks) {
	setupTest(hooks)

	test('it exists', function(assert) {
		let route = this.owner.lookup('route:music/artist')
		assert.ok(route)
	})
})
