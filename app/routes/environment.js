import Ember from "ember";

export default Ember.Route.extend({
  model: function (params) {
    let app = this.modelFor('app');
    return app.environments.findBy('id', params.environment_id);
  }
});
