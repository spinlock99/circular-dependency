import Ember from 'ember';
import Plan from 'circular-dependency/models/plan';

export default Ember.Route.extend({
  model: function () {
    return Plan.create();
  }
});
