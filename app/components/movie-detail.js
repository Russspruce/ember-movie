import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview(params, review) {
        this.sendAction('saveReview', params, review);
      },
  }
});
