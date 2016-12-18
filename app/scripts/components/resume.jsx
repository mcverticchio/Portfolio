var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var ResumeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container resumeSection">
          <div className="row">
            <div className="col-sm-12 skillSection">
              <h3>Skill</h3>
              <div className="col-md-4">
                <h4>Languages</h4>
                <ul>
                  <li><span>JavaScript/jQuery</span></li>
                  <li><span>HTML 5</span></li>
                  <li><span>CSS3/SASS</span></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Frameworks</h4>
                <ul>
                  <li><span>BackboneJS</span></li>
                  <li><span>React</span></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Tools</h4>
                <ul>
                  <li><span>Templating; Underscore/Handlebars</span></li>
                  <li><span>Version Control: Git</span></li>
                  <li><span>Design: Bootstrap /Adobe inDesign</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 educationSection">
              <h3>Education</h3>
              <div>
                <h4>The Iron Yard Academy</h4>
                <ul>
                  <li><span>Front-End Development/JavaScript - Graduated December 2016</span></li>
                </ul>
              </div>
              <div>
                <h4>University of South Carolina</h4>
                <ul>
                  <li><span>BS in Biology, cum laude - Graduated May 2014</span></li>
                </ul>
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
