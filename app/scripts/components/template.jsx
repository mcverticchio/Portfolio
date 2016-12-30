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
    Backbone.history.navigate('#/#welcome',{trigger:true});
      $('html, body').animate({
        scrollTop: $('#welcome').offset().top-85
      }, 1500);
  },
//   componentDidMount() {
//   // Decode entities in the URL
//   // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
//   window.location.hash = window.decodeURIComponent(window.location.hash);
//   const scrollToAnchor = () => {
//     const hashParts = window.location.hash.split('#');
//     if (hashParts.length > 2) {
//       const hash = hashParts.slice(-1)[0];
//       document.querySelector(`#${hash}`).scrollIntoView();
//     }
//   };
//   scrollToAnchor();
//   window.onhashchange = scrollToAnchor;
// },
  render: function(){
    return (
      <div>
        <Navbar className="topContainer header" inverse collapseOnSelect>

            <Navbar.Header className="navBarContainer">
              <Navbar.Brand>
                <a><img src="images/logo3.svg" /></a>
              </Navbar.Brand>
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
          <div className="row footer">
            <div className="bottomLine"></div>
            <a href="https://github.com/mcverticchio"><i className="col-md-3 col-sm-3 col-xs-3 fa fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/caroline-verticchio-b93348123?trk=nav_responsive_tab_profile"><i className="col-md-3 col-sm-3 col-xs-3 fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/caroline.verticchio"><i className="col-md-3 col-sm-3 col-xs-3 fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://twitter.com/"><i className="col-md-3 col-sm-3 col-xs-3 fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
