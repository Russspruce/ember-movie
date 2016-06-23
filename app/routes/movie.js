import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('movie', params.movie_id);
  },
  actions: {
    update(movie, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          movie.set(key,params[key]);
        }
      });
      movie.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var movie = params.movie;
      movie.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return movie.save();
      });
      this.transitionTo('movie', params.movie);
    }
  }
});
