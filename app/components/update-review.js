import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    updateReview(review) {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        score: parseInt(this.get('score')),
        movie: this.get('movie')
      };
      this.set('updateReviewForm', false);
      this.sendAction('updateReview', review, params);
    }
  }
});
