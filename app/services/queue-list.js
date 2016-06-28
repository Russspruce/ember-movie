import Ember from 'ember';

export default Ember.Service.extend({
  movies: [],

  add(movie) {
    this.get('movies').pushObject(movie);
    console.log(movie);
  }
});
