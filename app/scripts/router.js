var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var ResumeContainer = require('./components/resume.jsx').ResumeContainer;
var SingleProjectContainer = require('./components/singleproject.jsx').SingleProjectContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'resume/': 'resume',
    'project/:id/': 'project'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer, {router: this}),
      document.getElementById('app')
    )
  },
  resume: function(){
    ReactDOM.render(
      React.createElement(ResumeContainer),
      document.getElementById('app')
    )
  },
  project: function(id){
    ReactDOM.render(
      React.createElement(SingleProjectContainer, {id: id}),
      document.getElementById('app')
    )
  }
});

var router = new AppRouter();

module.exports = router;
