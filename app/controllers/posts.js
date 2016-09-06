import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,
  perPage: 5,
  totalPages: Ember.computed.alias('model.meta.totalPages'),
  nextPage: Ember.computed('page', function() {
    return this.get('page') + 1;
  }),

  fetchPosts(params) {
    return this.store.query('post', {page: params.page, per_page: this.get('perPage')});
  }
});
