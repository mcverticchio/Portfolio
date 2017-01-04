var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var HomeContainer = require('./home.jsx').HomeContainer;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;

var TemplateContainer = React.createClass({
  handleHomeNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#', {trigger:true});
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  },
  handleResumeNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#resume/', {trigger:true});
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  },
  handleWorkNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#workLink', {trigger:true});
      $('html, body').animate({
        scrollTop: $('#workLink').offset().top-85
      }, 1500);
  },
  handleContactNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#welcomeSection', {trigger:true});
      $('html, body').animate({
        scrollTop: $('#welcomeSection').offset().top-135
      }, 1500);
  },
  render: function(){
    return (
      <div>
        <Navbar className="topContainer header" inverse collapseOnSelect>

            <Navbar.Header className="navBarContainer">
              
              <Navbar.Toggle />
                <Nav>
                  <NavItem onClick={this.handleHomeNav} className="nameDescHolder" href="#" className="name"><span className="myName">Caroline Verticchio/</span><span className="title">Front-end Developer</span></NavItem>
                </Nav>
            </Navbar.Header>

            <Navbar.Collapse>

              <Nav pullRight>
                <NavItem onClick={this.handleResumeNav} className="link" eventKey={1}>Resume</NavItem>
                <NavItem onClick={this.handleWorkNav} className="link" eventKey={2}>Portfolio</NavItem>
                <NavItem onClick={this.handleContactNav} className="link" eventKey={3}>Contact</NavItem>
              </Nav>

            </Navbar.Collapse>
          </Navbar>




        {this.props.children}


        <div className="container-fluid">
          <div className="row footer" id="footer">
            <div className="bottomLine"></div>
            <div className="col-md-12 followMe">
              <h2>Follow Me</h2>
                <a href="https://www.linkedin.com/in/caroline-verticchio-b93348123?trk=nav_responsive_tab_profile" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/caroline.verticchio" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://medium.com/@mcverticchio" target="_blank"><i className="fa fa-medium" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}

// <div className="col-md-6 contact">
//   <div className="contactBlock">
//     <div className="oneContact"><a href="tel:864-316-8588"><i className="fa fa-phone" aria-hidden="true"></i></a><h3>mcverticchio@gmail.com</h3></div>
//     <div className="oneContact"><a href="mailto:mcverticchio@gmail.com?subject=Hello!"><i className="fa fa-envelope" aria-hidden="true"></i></a><h3>864.316.8588</h3></div>
//     <div className="oneContact"><a href="https://github.com/mcverticchio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a><h3>github.com/mcverticchio</h3></div>
//     <div className="oneContact"><a href="documents/resume.pdf" target="_blank"><i className="fa fa-file" aria-hidden="true"></i></a><h3>Resume</h3></div>
//   </div>
// </div>
