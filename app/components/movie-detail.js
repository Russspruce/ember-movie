import Ember from 'ember';

export default Ember.Component.extend({

  // var averageScore;
//   scores:       Ember.computed.mapBy('review', 'score'),
//   sumOfScores:  Ember.computed.sum('scores'),
//   averageScore: Ember.computed('sumOfScores', 'scores.length', function() {
//   return this.get(('sumOfScores') / this.get('scores.length'));
// }),



  actions: {
    saveReview(params, review) {
      // console.log(averageScore),
        this.sendAction('saveReview', params, review);
      },
  }
});
