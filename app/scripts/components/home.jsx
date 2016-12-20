var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;
var projects = require('../projects/myproject.js').projects;

var HomeContainer = React.createClass({
  // handleClick: function(project){
  //   // e.preventDefault();
  //   var router = this.props.router;
  //   // console.log(project);
  //   router.navigate('projects/' + project.id + '/', {trigger:true});
  // },
  render: function(){
    var self = this;
    var oneProject = projects.map(function(project){
      return (
        <a href={'#project/' + project.id + '/'} key={project.id} className="col-xs-6 col-md-4 thumb">
          <div className="thumbnail">
            <img className="myImage" src={project.img} alt="..." />
            <div className="caption">
              <h4>{project.title}</h4>
            </div>
          </div>
        </a>
      );
    });
    return (
      <Template>

        <div className="container-fluid">
          <div className="introSection row">
            <div className="aboutMe col-md-12 col-sm-12 col-xs-12">
              <span>Hi, I'm Caroline</span>
              <p>I want to make the web a cooler place.</p>
            </div>
          </div>
        </div>

        <div className="container myDescriptionContainer">
          <div className="row myDescriptionSection">
            <div className="col-sm-3 col-xs-6">
              <div className="profile"></div>
            </div>
            <div className="col-sm-9 col-xs-6">
              <div className="welcomeSection">
                <span>Welcome,</span>
                <p className="description">I am a junior front-end developer and I strive to create attractive and user friendly interfaces.</p>
                <a href="mailto:mcverticchio@gmail.com?subject=Hello!"><div name="welcomeArea" className="col-md-4 contact"><i className="fa fa-envelope" aria-hidden="true"></i><span>mcverticchio@gmail.com</span></div></a>
                <div className="col-md-4 contact"><i className="fa fa-phone" aria-hidden="true"></i><span>864.316.8588</span></div>
                <a href="documents/resume.pdf"><div className="col-md-4 contact"><i className="fa fa-file" aria-hidden="true"></i><span>Resume</span></div> </a>
            </div>
            </div>
          </div>
        </div>

        <div className="container workContainer">
          <div className="row">
            <a id="workLink"><div className="col-md-12 myWorkTitle" name="workLink">
              My Work
            </div></a>
            <div className="borderBottom"></div>
            <div className="col-md-12 myWorkSection">
              {oneProject}
            </div>
          </div>
        </div>

      </Template>
    )
  }
});

module.exports = {
  HomeContainer: HomeContainer
}

// <div className="col-xs-6 col-md-4 thumb">
//   <div className="caption">
//     <h4></h4>
//   </div>
//   <a href="#" className="thumbnail">
//     <img src="images/HP.png" alt="..." />
//   </a>
// </div>


// <div className="col-xs-6 col-md-4 thumb">
//   <a href="https://mcverticchio.github.io/1.4-pixel-perfect/" className="thumbnail">
//     <img src="images/surfPaddle.png" alt="..." />
//     <div className="caption">
//       <h4>Surf and Paddle</h4>
//     </div>
//   </a>
// </div>
//
// <div className="col-xs-6 col-md-4 thumb">
//   <a href="https://mcverticchio.github.io/2.2-sass-bootstrap/" className="thumbnail">
//     <img src="images/skateboard.png" alt="..." />
//     <div className="caption">
//       <h4>Skateboard Brand Design Comp</h4>
//     </div>
//   </a>
// </div>
//
// <div className="col-xs-6 col-md-4 thumb">
//   <a href="https://mcverticchio.github.io/4.4-Github-Recreation/" className="thumbnail">
//     <img src="images/github.png" alt="..." />
//     <div className="caption">
//       <h4>Github Recreation</h4>
//     </div>
//   </a>
// </div>
//
// <div className="col-xs-6 col-md-4 thumb">
//   <a href="https://mcverticchio.github.io/7.4-Majestic-Thai/" className="thumbnail">
//     <img src="images/majesticThai.png" alt="..." />
//     <div className="caption">
//       <h4>Majestic Thai Restaurant Ordering App</h4>
//     </div>
//   </a>
// </div>
//
// <div className="col-xs-6 col-md-4 thumb">
//   <a href="#" className="thumbnail">
//     <img src="images/store.png" alt="..." />
//     <div className="caption">
//       <h4>Store to Door: Grocery Store Delivery App</h4>
//     </div>
//   </a>
// </div>
