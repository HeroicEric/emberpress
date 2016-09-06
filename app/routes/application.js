import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      pages: this.store.query('page', {})
    });
  }
});
