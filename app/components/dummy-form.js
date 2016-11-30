import Ember from 'ember';
import Changeset from 'ember-changeset';

const { Component, get } = Ember;

export default Component.extend({
  init() {
    this._super(...arguments);
    const model = get(this, 'model');
    const validator = get(this, 'validate');
    this.changeset = new Changeset(model, validator);
    // this.index = 1;
  }
});
