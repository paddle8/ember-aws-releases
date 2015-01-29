import Ember from "ember";

let get = Ember.get;
let dasherize = function (string) {
  return string.replace('[', '-').replace(']', '');
};

export default Ember.Component.extend({
  classNames: ['labelled-input'],
  classNameBindings: ['error:invalid'],
  type: 'text',
  inputId: function () {
    return dasherize(get(this, 'name'));
  }.property('name')
});
