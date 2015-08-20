import Ember from 'ember';
import PlanArray from './plan-array';

export default Ember.Object.extend({
  name: 'Plan',

  init: function () {
    planArray = PlanArray.create();
  }
});
