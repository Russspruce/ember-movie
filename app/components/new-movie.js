import Ember from 'ember';

export default Ember.Component.extend({
  addNewMovie: false,
  actions: {
    movieFormShow() {
      this.set('addNewMovie', true);
    },

    saveMovie() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        rating: this.get('rating'),
        genre: this.get('genre')
      };
      this.set('addNewMovie', false);
      this.sendAction('saveMovie', params);
    }
  }
});
