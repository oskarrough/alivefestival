import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wheel-of-fortune', 'Integration | Component | wheel of fortune', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{wheel-of-fortune}}`);
  assert.equal(1, 1)
});
