import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'post',

  model(params) {
    debugger;
    return this.store.queryRecord('page', {slug: params.page_id})
  }
});
