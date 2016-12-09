var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var ResumeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <h1>RESUME HERE</h1>
      </Template>
    )
  }
});

module.exports = {
  ResumeContainer: ResumeContainer
}
