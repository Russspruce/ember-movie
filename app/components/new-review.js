import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

    actions: {
      reviewForm: function() {
        this.set('addNewReview', true);
      },

      saveReview() {
        var params = {
          name: this.get('name'),
          comment: this.get('comment'),
          score: parseInt(this.get('score')),
          movie: this.get('movie')
        };


        this.sendAction('saveReview', params);
        this.set('addNewReview', false);
      }
    }
  });
