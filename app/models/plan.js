import Ember from 'ember';
import PlanArray from './plan-array';

export default Ember.Object.extend({
  name: 'Plan',
  planArray: null,

  init: function () {
    var planArray = PlanArray.create();
    this.set('planArray', planArray);
  }
});
