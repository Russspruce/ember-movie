import Ember from 'ember';

export default Ember.Component.extend({
  updateMovieForm: false,
  actions: {
    updateMovieForm() {
      this.set('updateMovieForm', true);
    },
    saveReview(review, params) {
      this.sendAction('saveReview2', review, params);
    },
    updateMovie(movie) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        rating: this.get('rating'),
        genre: this.get('genre'),
        poster: this.get('poster')
      };
      this.set('updateMovieForm', false);
      this.sendAction('update', movie, params);
    }
  }
});
