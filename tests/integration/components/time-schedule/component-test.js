import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | time-schedule', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{time-schedule}}`);

    assert.equal(this.element.textContent.trim().includes('Scene'), true)

    // Template block usage:
    // await render(hbs`
    //   {{#time-schedule}}
    //     template block text
    //   {{/time-schedule}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
