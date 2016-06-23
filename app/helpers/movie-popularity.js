import Ember from 'ember';

export function moviePopularity(params) {
  var movie = params[0];

  if(movie.get('reviews').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-eye-open"></span>');
  }
}
export default Ember.Helper.helper(moviePopularity);
