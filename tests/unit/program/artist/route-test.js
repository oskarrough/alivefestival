import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | program/artist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:program/artist');
    assert.ok(route);
  });
});
