import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-root', 'Integration | Component | x root', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-root}}`);
  assert.equal(this.$().length, 1)
});
