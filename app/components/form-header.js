import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['form-header'],
  classNameBindings: ['active:active']
});
