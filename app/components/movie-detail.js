import Ember from 'ember';

export default Ember.Component.extend({
  testing: Ember.computed('movie.title', 'movie.rating', function() {
    return this.get('movie.title') + ', ' + this.get('movie.rating');
  }),
  averageScore: Ember.computed('review.@each.score', function() { //Used to determite each score of review
    return this.get('review').(function(sum, review) {
      return sum += review.get('score');
    }, 0) / this.get('reviews').get('length');

  }),
  actions: {
    saveReview(params, review) {
      console.log(averageScore),
        this.sendAction('saveReview', params, review);
      },
  }
});
