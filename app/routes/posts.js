import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.controllerFor(this.routeName).fetchPosts(params);
  }
});
