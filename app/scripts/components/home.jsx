var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var HomeContainer = React.createClass({
  render: function(){
    return (
      <Template>

        <div className="container-fluid">
          <div className="introSection row">
            <div className="aboutMe col-md-12 col-sm-12 col-xs-12">
              <span>Hi, I'm Caroline</span>
              <p>I am a front-end engineer. I strive to design attractive and user friendly interfaces.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row myDescriptionSection">
            <div className="col-sm-3 col-xs-6">
              <div className="profile"></div>
            </div>
            <div className="col-sm-9 col-xs-6">
              <div className="welcomeSection">
                <span>Welcome!</span>
                <p className="description">I am a front-end devleoper and lorem ipsum.  I want to design cool things words words words words stuff.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container workContainer">
          <div className="row">
            <div className="col-md-12 myWorkTitle">
              My Work
            </div>
            <div className="borderBottom"></div>
            <div className="col-md-12 myWorkSection">
              <div className="col-xs-6 col-md-4 thumb">
                <a href="https://mcverticchio.github.io/1.2-octocats/" className="thumbnail">
                  <img className="myImage" src="images/octocat1.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
                <a href="https://mcverticchio.github.io/1.4-pixel-perfect/" className="thumbnail">
                  <img src="images/surf.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
                <a href="https://mcverticchio.github.io/2.2-sass-bootstrap/.htm" className="thumbnail">
                  <img src="images/skatebrd.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
                <a href="https://mcverticchio.github.io/4.4-Github-Recreation/" className="thumbnail">
                  <img src="images/github.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
                <a href="#" className="thumbnail">
                  <img src="images/HP.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
                <a href="https://mcverticchio.github.io/7.4-Majestic-Thai/" className="thumbnail">
                  <img src="images/majthai.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4 thumb">
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
