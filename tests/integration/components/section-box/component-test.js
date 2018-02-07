import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-box', 'Integration | Component | section box', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{section-box}}`);
  assert.equal(1, 1)
});
