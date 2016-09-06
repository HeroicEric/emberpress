import Ember from 'ember';

export default Ember.Route.extend({
  model({q}) {
    return Ember.RSVP.hash({
      query: q,
      results: this.store.query('post', {search: q})
    });
  }
});
