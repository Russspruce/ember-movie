
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  genre: DS.attr(),
  poster: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),

});
