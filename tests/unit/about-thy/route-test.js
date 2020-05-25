import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about-thy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about-thy');
    assert.ok(route);
  });
});
