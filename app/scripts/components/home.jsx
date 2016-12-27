var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;
var projects = require('../projects/myproject.js').projects;

var HomeContainer = React.createClass({
  render: function(){
    var self = this;
    var oneProject = projects.map(function(project){
      return (
        <a href={'#project/' + project.id + '/'} key={project.id} className="col-xs-12 col-sm-6 col-md-4 thumb">
          <div className="thumbnail">
            <img className="mainProjectImage" src={project.img} alt="..." />
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
              <span col-md-12 col-xs-12 col-sm-12>Hi, I'm Caroline</span>
              <p col-md-12 col-xs-12 col-sm-12>I want to help shape the web</p>
            </div>
          </div>
        </div>

        <div className="container myDescriptionContainer">
          <div className="row myDescriptionSection">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="profile"></div>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12">
              <div className="welcomeSection">
                <span className="aboutMeTitle">About Me</span>
                <div className="borderBottom col-md-12 col-sm-12 col-xs-12"></div>
                <p className="description">I am from Spartanburg, South Carolina.  I love to be outdoors and explore new places. I have a passion for music and anything food related.  I have recently discovered a new passion for designing and creating applications.  After working in healthcare for a few years I realized my ambitions lie elsewhere and I discovered the coding world. Every day presents a new challenge and I   Please contact me if your company is looking for someone like me! </p>
                <a href="mailto:mcverticchio@gmail.com?subject=Hello!"><div name="welcomeArea" className="col-md-4 col-sm-12 col-xs-12 contact"><i className="fa fa-envelope" aria-hidden="true"></i><span>mcverticchio@gmail.com</span></div></a>
                <div className="col-md-4 col-sm-12 col-xs-12 contact"><i className="fa fa-phone" aria-hidden="true"></i><span>864.316.8588</span></div>
                <a href="documents/resume.pdf"><div className="col-md-4 col-sm-12 col-xs-12 contact"><i className="fa fa-file" aria-hidden="true"></i><span>Resume</span></div> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid timelineContainer">
          <section className="timeline">
            <ul>
              <li>

                <div>
                  <h4>USC</h4>
                  <time>2014 </time> I graduated from USC Columbia in 2014 with BS in Biology.  While in school I was apart of a national honor fraternity, participated in undergraduate research in the USC biology department, and studied abroad for a semester in Barcelona, Spain.
                </div>
              </li>
              <li>
                <div>
                  <h4>Healthcare</h4>
                  <time>2014-2016 </time> For 2 years after graduation I worked in healthcare as a CNA and then a medical scribe.  I worked in hospital facilites and private offices. Taking care of people was incredibly rewarding for me and a phase of my life that I am truly proud of.
                </div>
              </li>
              <li>
                <div>
                  <h4>The Iron Yard</h4>
                  <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                </div>
              </li>
            </ul>
          </section>
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

// <div className='container-fluid timelineSection'>
//   <div className="row">
//     <div className="tlPics col-md-12">
//       <h4 className="col-md-4">2014</h4>
//       <div className="col-md-4 usc"><img src="images/USC.gif"></img></div>
//       <div className="uscDescription col-md-4"><h3>USC</h3>I graduated from USC Columbia
// in 2014 with BS in Biology.  While in school I was apart of a national honor fraternity,
// participated in undergraduate research in the USC biology department, and studied abroad for a
// semester in Barcelona, Spain. </div>
//     </div>
//     <div className="tlPics col-md-12 middleSection">
//       <div className="medDescription col-md-4"><h3>Healthcare</h3>For 2 years after graduation I worked in healthcare as a CNA and then a medical scribe.  I worked in hospital facilites and private offices. Taking care of people was incredibly rewarding for me and a phase of my life that I am truly proud of.</div>
//       <div className="col-md-4 medical"><img src="images/medical.jpg"></img></div>
//       <h4 className="col-md-4">2014-2016</h4>
//     </div>
//     <div className="tlPics col-md-12">
//       <h4 className="col-md-4">2016</h4>
//       <div className="col-md-4 tiy"><img src="images/tiy.png"></img></div>
//       <div className="tiyDescription col-md-4"><h3>The Iron Yard</h3></div>
//     </div>
//     <div className="tlLine"></div>
//   </div>
// </div>
