import Ember from 'ember';

export function moviePopularity(params) {
  var movie = params[0];
  if(movie.get('averageScore') >= 80) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(moviePopularity);
