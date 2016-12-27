var React = require('react');
var Backbone = require('backbone');
var HomeContainer = require('./home.jsx').HomeContainer;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;

var TemplateContainer = React.createClass({
  handleWorkNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#workLink', {trigger:true});
  },
  handleContactNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#welcomeSection',{trigger:true});
  },
  componentDidMount() {
  // Decode entities in the URL
  // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
  window.location.hash = window.decodeURIComponent(window.location.hash);
  const scrollToAnchor = () => {
    const hashParts = window.location.hash.split('#');
    if (hashParts.length > 2) {
      const hash = hashParts.slice(-1)[0];
      document.querySelector(`#${hash}`).scrollIntoView();
    }
  };
  scrollToAnchor();
  window.onhashchange = scrollToAnchor;
},
  render: function(){
    return (
      <div>
        <Navbar className="topContainer header" inverse collapseOnSelect>

            <Navbar.Header className="navBarContainer">
              <Navbar.Brand>
                <a href="#"><img src="images/logo3.svg" /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
                <Nav>
                  <NavItem className="nameDescHolder" href="#" className="name"><span className="myName">Caroline Verticchio/</span><span className="title">Front-end Developer</span></NavItem>
                </Nav>
            </Navbar.Header>

            <Navbar.Collapse>

              <Nav pullRight>
                <NavItem className="link" eventKey={1} href="#resume/">Resume</NavItem>
                <NavItem className="link" eventKey={2} href="#">Portfolio</NavItem>
                <NavItem className="link" eventKey={3} href="#">Contact</NavItem>
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
//
// <div className="topContainer container-fluid">
//   <div className="row header">
//     <header>
//       <div className="col-md-6 col-sm-6 col-xs-6">
//       <div onClick={this.handleHomeNav} className="name"><img src="images/logo3.svg" /><span className="myName">Caroline Verticchio/<span className="title">Front-End Developer</span></span></div>
//       </div>
//       <div className="links col-md-6 col-sm-6 col-xs-6">
//         <a href="#/#workLink"><span>Portfolio</span></a>
//         <span onClick={this.handleResumeNav}>Resume</span>
//         <span onClick={this.handleContactnNav} >Contact</span>
//       </div>
//       <div className="line"></div>
//     </header>
//   </div>
// </div>


// <div>
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <a className="navbar-brand" href="#">
//           <img alt="Brand" src="images/logo3.svg" />
//         </a>
//       </div>
//     </div>
//   </nav>
