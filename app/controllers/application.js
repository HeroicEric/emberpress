import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(term) {
      this.transitionToRoute('search', term);
      this.set('searchText', null);
    }
  }
});
