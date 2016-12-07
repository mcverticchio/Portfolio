var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var HomeContainer = require('./components/home.jsx').HomeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
