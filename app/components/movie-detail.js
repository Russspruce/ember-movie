import Ember from 'ember';

export default Ember.Component.extend({

  // var averageScore;
//   scores:       Ember.computed.mapBy('review', 'score'),
//   sumOfScores:  Ember.computed.sum('scores'),
//   averageScore: Ember.computed('sumOfScores', 'scores.length', function() {
//   return this.get(('sumOfScores') / this.get('scores.length'));
// }),



  actions: {
    update(movie, params) {
      this.sendAction('update', movie, params);
    },
    saveReview(params, review) {
      // console.log(averageScore),
        this.sendAction('saveReview', params, review);
      },
  updateReview(params, review) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          review.set(key,params[key]);
        }
      });
      review.save();
      this.transitionTo('movie');
    }
  }

});
