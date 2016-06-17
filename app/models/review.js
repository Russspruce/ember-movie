import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  comment: DS.attr(),
  score: DS.attr(),
  movie: DS.belongsTo('movie', {async: true})


});
