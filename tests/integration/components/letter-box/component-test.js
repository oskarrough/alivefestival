import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('letter-box', 'Integration | Component | letter box', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{letter-box}}`);
  assert.equal(1, 1)
});
