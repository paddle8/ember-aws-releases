import Ember from "ember";

var guidFor = Ember.guidFor;
var generateGuid = Ember.generateGuid;
var get = Ember.get;
var set = Ember.set;

var CheckBox = Ember.Component.extend({

  tagName: 'label',

  classNames: ['check-box'],

  init: function () {
    var checkboxId = get(this, 'elementId') || generateGuid();
    var id = get(this, 'elementId') || guidFor(this);
    if (checkboxId === id) {
      set(this, 'elementId', guidFor(this));
    }
    set(this, 'checkboxId', checkboxId);

    this._super();
  },

  createChildView: function (childView, options) {
    if (Ember.Checkbox.detect(childView)) {
      options.elementId = get(this, 'checkboxId');
    }
    return this._super(childView, options);
  }
});

export default CheckBox;
