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
    Backbone.history.navigate('work/', {trigger:true});
  },
  render: function(){
    return (
      <div>
        <div className="row">
          <div className="col-md-12 header">
            <header>
              <div onClick={this.handleHomeNav} className="name">Caroline Verticchio</div>
              <div className="links">
                <span onClick={this.handleWorkNav}>Portfolio</span>
                <span onClick={this.handleResumeNav}>Resume</span>
                <span>Contact</span>
              </div>
            </header>
          </div>
        </div>


        {this.props.children}


        <div className="row">
          <div className="col-md-12 footer">
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
