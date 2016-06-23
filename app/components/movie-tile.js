import Ember from 'ember';

export default Ember.Component.extend({
  movieToWatch: Ember.computed('movie.title', 'movie.rating', function() {
    return this.get('movie.title') + ', ' + this.get('movie.rating');
  }),



});
