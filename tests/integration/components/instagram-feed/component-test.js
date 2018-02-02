import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('instagram-feed', 'Integration | Component | instagram feed', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{instagram-feed}}`);
  assert.equal(this.$('iframe').length, 1);
});
