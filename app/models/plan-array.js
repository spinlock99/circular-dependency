import Ember from 'ember';
import Plan from './plan';

export default Ember.Object.extend({
  name: 'PlanArray',

  embeds: {item: Plan}

});
