import Ember from 'ember';

export default Ember.Component.extend({

  averageScore: Ember.computed('movie', function() {
    var total = 0;
    var reviewTotal = 0;

    this.get('movie.reviews').forEach(function(review) {
      reviewTotal += 1;
      total += review.get('score');
    });

  return (total/reviewTotal).toFixed(1);
}),



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
