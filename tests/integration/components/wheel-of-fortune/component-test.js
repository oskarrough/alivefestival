import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wheel-of-fortune', 'Integration | Component | wheel of fortune', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{wheel-of-fortune}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#wheel-of-fortune}}
      template block text
    {{/wheel-of-fortune}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
