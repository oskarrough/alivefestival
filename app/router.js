import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news', {path: 'nyheder'}, function() {
    this.route('post', {path: ':post_slug'});
  });
  this.route('music', {path: 'musik'}, function() {
    this.route('artist', {path: ':artist_slug'});
  });
  this.route('adventure', {path: 'eventyr'});
  this.route('guide');
  this.route('about', {path: 'om-alive'}, function () {
    this.route('contact', {path: 'kontakt'});
    this.route('history', {path: 'historie'});
  });
  this.route('english');
  this.route('memory', {path: 'lykkehjulet'});
  this.route('tickets', {path: 'billetter'});
});

export default Router;
