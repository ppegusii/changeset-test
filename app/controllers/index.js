import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    submit(changeset) {
      return changeset.save();
    },

    rollback(changeset) {
      return changeset.rollback();
    },

    validate(/*{ key, newValue, oldValue, changes, content }*/) {
      // lookup a validator function on your favorite validation library
      // should return a Boolean
      return true;
    }
  }
});
