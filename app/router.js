import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styleguide');
  this.route('signIn', { path: 'sign-in' });
  this.route('configure', { path: 'configure' });

  this.resource('apps');
  this.resource('app', { path: 'apps/:app_id' }, function () {
    this.resource('environment', { path: ':environment_id' }, function () {
      this.route('release', { path: 'releases/:release_id' });
    });
  });
});

export default Router;
