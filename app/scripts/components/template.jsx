var React = require('react');
var Backbone = require('backbone');

var TemplateContainer = React.createClass({
  handleHomeNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('', {trigger:true});
  },
  handleResumeNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('resume/', {trigger:true});
  },
  handleWorkNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#workLink', {trigger:true});
  },
  handleContactnNav: function(e){
    e.preventDefault();
    Backbone.history.navigate('#/#welcomeSection',{trigger:true});
  },
  render: function(){
    return (
      <div>
        <div className="topContainer container-fluid">
          <div className="row header">
            <header>
              <div onClick={this.handleHomeNav} className="name"><img src="images/logo3.svg" /><span className="myName">Caroline Verticchio/<span className="title">Front-End Developer</span></span></div>
              <div className="links">
                <span onClick={this.handleWorkNav}>Portfolio</span>
                <span onClick={this.handleResumeNav}>Resume</span>
                <span onClick={this.handleContactnNav} >Contact</span>
              </div>
              <div className="line"></div>
            </header>
          </div>
        </div>


        {this.props.children}


        <div className="container-fluid">
          <div className="row footer">
            <div className="bottomLine"></div>
            <a href="https://github.com/mcverticchio"><i className="col-md-3 fa fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/caroline-verticchio-b93348123?trk=nav_responsive_tab_profile"><i className="col-md-3 fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/caroline.verticchio"><i className="col-md-3 fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://twitter.com/"><i className="col-md-3 fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}

// <div className="container">
//   <div className="row contactSection">
//     <h3>Contact Me</h3>
//     <div className="borderBottom"></div>
//       <div className="col-md-4 contact"><i className="fa fa-envelope" aria-hidden="true"></i><span>mcverticchio@gmail.com</span></div>
//       <div className="col-md-4 contact"><i className="fa fa-phone" aria-hidden="true"></i><span>864.316.8588</span></div>
//       <div className="col-md-4 contact"><i className="fa fa-file" aria-hidden="true"></i><span>Resume</span></div>
//   </div>
// </div>
