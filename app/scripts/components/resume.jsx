var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var ResumeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Skill</h3>
              <div className="col-md-4">
                <h4>Languages</h4>
                <span>JavaScript/jQuery</span>
                <span>HTML 5</span>
                <span>CSS3/SASS</span>
              </div>
              <div className="col-md-4">
                <h4>Frameworks</h4>
                <span>BackboneJS</span>
                <span>React</span>
              </div>
              <div className="col-md-4">
                <h4>Tools</h4>
                <span>Templating; Underscore/Handlebars</span>
                <span>Version Control: Git</span>
                <span>Design: Bootstrap /Adobe inDesign</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3>Education</h3>
              <div>
                <h4>The Iron Yard Academy</h4>
                <p>Front-End Development/JavaScript - Graduated December 2016</p>
              </div>
              <div>
                <h4>University of South Carolina</h4>
                <p>BS in Biology, cum laude - Graduated May 2014</p>
              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  ResumeContainer: ResumeContainer
}
