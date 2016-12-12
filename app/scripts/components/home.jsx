var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var HomeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container-fluid">
          <div className="aboutMeSection row">
            <div className="profile col-md-6 col-sm-6 col-xs-6">
            </div>
            <span className="welcomeContainer"></span>
            <span className="welcomeWord">Welcome</span>
            <div className="aboutMe col-md-6 col-sm-6 col-xs-6well">
              <span>My name is Caroline</span>
              <p>I am a front-end engineer. I strive to design attractive and user friendly interfaces.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid workContainer">
          <div className="row">
            <div className="col-md-6 myWorkTitle">
              My Work
            </div>
            <div className="col-md-6 myWorkSection">
              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/octocat1.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/surf.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/skatebrd.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/github.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/HP.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/majthai.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-6 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/StoD.png" alt="..." />
                </a>
              </div>
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

// <a href="https://mcverticchio.github.io/1.2-octocats/" className="col-md-5 project"><img src="images/octocat.png"></img></a>
// <div className="col-md-5 project"></div>
// <div className="col-md-5 project"></div>
// <div className="col-md-5 project"></div>


// <div className="container-fluid">
//   <div className="row aboutMeSection">
//     <p>My name is Caroline Verticchio!</p>
//     <div className="profile"><img className="profilePic" src="images/profile.png" /></div>
//     <div>
//       <div className="col-md-4 contact"><span className="glyphicon glyphicon-phone-alt" aria-hidden="true"></span><span className="contactText">(864)316-8588</span></div>
//       <div className="col-md-4 contact"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><span className="contactText">mcverticchio@gmail.com</span></div>
//       <div className="col-md-4 contact"><span className="glyphicon glyphicon-file" aria-hidden="true"></span><span className="contactText">Resume</span></div>
//     </div>
//   </div>
// </div>
//
// <div className="container">
//   <div className="row">
//     <div className="col-md-12 imageContentDiv">
//       <div className="imageOfMeContainer">
//       </div>
//     </div>
//   </div>
// </div>
