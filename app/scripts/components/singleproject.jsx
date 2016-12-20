var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var Template = require('./template.jsx').TemplateContainer;
var projects = require('../projects/myproject.js').projects;


var SingleProjectContainer = React.createClass({
  render: function(){
    var self = this;
    var id = this.props.id;
    var projectArr = projects.filter(function(project){
      if (project.id == id){
        return true;
      } else {
        return false;
      }
    });

    var individualProject = projectArr.map(function(project){
      return(
        <div key={project.id} className="col-md-12">
          <div className="col-md-5">
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectInfo">{project.description}</p>
            <h4 className="techTitle">Tech Used</h4>
              <ul className="tech"></ul>              //HOW TO ITERATE OVER EACH TECH ITEM AND DISPLAY AS SEPARATE LIST ITEM???
            <a className="link" href={project.live}><button className="btn btn-success">Live</button></a>
            <a className="link" href={project.code}><button className="btn btn-success codebtn">Code</button></a>
          </div>
          <div className="col-md-7 imageContainer">
            <img className="myImage" src={project.images} alt="..." />  //THESE ARENT DISPLAYING IF THERE IS MORE THAN ONE,  HOW TO ITERATE OVER THESE??
          </div>
        </div>
      )
    });
    return (
      <Template>
        <div className="container projectContainer">
          <div className="row">
            {individualProject}
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  SingleProjectContainer: SingleProjectContainer
}
