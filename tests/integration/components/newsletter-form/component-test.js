import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | newsletter-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{newsletter-form}}`);
    // assert.equal(this.element.textContent.trim(), '');
    assert.equal(this.element.querySelectorAll('input[type="submit"]').length, 1);
  });
});
