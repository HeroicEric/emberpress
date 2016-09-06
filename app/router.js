import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {
    path: '/'
  });

  this.route('post', {
    path: 'post/:post_id'
  });
  this.route('products');

  this.route('product', {
    path: 'product/:product_id'
  });
  this.route('search', { path: 'search/:q' });

  this.route('user', {
    path: 'user/:user_id'
  });

  this.route('page', {
    path: 'page/:page_id'
  });
});

export default Router;
