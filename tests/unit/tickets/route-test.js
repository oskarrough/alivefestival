import { moduleFor, test } from 'ember-qunit';

moduleFor('route:tickets', 'Unit | Route | tickets', {
	needs: ['service:layout']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
