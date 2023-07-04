import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-2023/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MyForm />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MyForm>
        template block text
      </MyForm>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
