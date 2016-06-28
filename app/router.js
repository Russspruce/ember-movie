import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movie', {path: '/movie/:movie_id'});
  this.route('queue');
});

export default Router;
