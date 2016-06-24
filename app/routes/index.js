import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('movie');
  },
  actions: {
    saveMovie(params) {
      console.log(params);
      var newMovie = this.store.createRecord('movie', params);
      newMovie.save();
      this.transitionTo('index');
    }
  }
});
