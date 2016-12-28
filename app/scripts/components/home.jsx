var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var Template = require('./template.jsx').TemplateContainer;
var projects = require('../projects/myproject.js').projects;

var HomeContainer = React.createClass({
  //FOLLOWED EXAMPLE FROM https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 //
  componentDidMount: function(){
    var items = document.querySelectorAll(".timeline li");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
  },
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
          <div className="row myDescriptionSection" id="welcome">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="profile"></div>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12">
              <div id="welcomeSection">
                <span className="aboutMeTitle">About Me</span>
                <div className="borderBottom col-md-12 col-sm-12 col-xs-12"></div>
                <p className="description">I am from Spartanburg, South Carolina.  I love to be outdoors and explore new places. I have a passion for music and anything food related.  I have recently discovered a new passion for designing and creating web applications.  After working in healthcare for a few years I realized my ambitions lie elsewhere and I discovered the coding world. Every day presents a new challenge and I am excited to continue learning and expanding my programming skills. Please contact me if your company is looking for someone like me! </p>
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
                  <div className="timelineImage"><img src="images/USC.gif"></img></div>
                  <h4>USC</h4>
                  <time>2014 </time>
                  <span className="timelineContent">
                    I graduated from USC Columbia in 2014 with BS in Biology.  While in school I was apart of a national honor fraternity,
                    participated in undergraduate research in the USC biology department, and studied abroad for a semester in Barcelona, Spain.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div className="timelineImage medical"><img src="images/medical.jpg"></img></div>
                  <h4>Healthcare</h4>
                  <time>2014-2016 </time> For 2 years after graduation I worked in healthcare as a CNA and then as a medical scribe.
                    I worked in hospital facilites and private offices. Taking care of people was incredibly rewarding for me and a phase
                    of my life that I am truly proud of.
                </div>
              </li>
              <li>
                <div>
                  <div className="timelineImage"><img src="images/tiy.png"></img></div>
                  <h4>The Iron Yard</h4>
                  <time>2016</time> I enrolled in the Iron Yard Front-end Engineering Program in September, 2016.
                    While at the Greenville campus, I tackled new challenges daily and built many small web applications.
                    After 3 months of hard work, I presented my final project in partnership with a back end engineer at Demo Day.
                    The Iron Yard gave me a solid coding foundation and the understanding of how to continue learning.
                </div>
              </li>
            </ul>
          </section>
        </div>


        <div className="container workContainer">
          <div className="row">
            <a id="workLink"><div className="col-md-12 myWorkTitle">
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
