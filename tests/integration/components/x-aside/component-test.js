import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-aside', 'Integration | Component | x aside', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-aside}}`);
  assert.equal(this.$().length, 1)
});
