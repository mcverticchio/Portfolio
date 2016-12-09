var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var WorkContainer = require('./components/work.jsx').WorkContainer;
var ResumeContainer = require('./components/resume.jsx').ResumeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'resume/': 'resume',
    'work/': 'work'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    )
  },
  resume: function(){
    ReactDOM.render(
      React.createElement(ResumeContainer),
      document.getElementById('app')
    )
  },
  work: function(){
    ReactDOM.render(
      React.createElement(WorkContainer),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
