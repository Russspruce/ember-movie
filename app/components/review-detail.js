import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    saveReview(params, review) {
        console.log(params);
          this.sendAction('saveReview', params, review);
        }
      }
});
