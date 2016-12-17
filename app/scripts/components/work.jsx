var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var WorkContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container workContainer">
          <div className="row">
            <div className="col-md-12 myWorkSection">
              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/octocat1.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/surf.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/skatebrd.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/github.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/HP.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
                <a href="#" className="thumbnail">
                  <img src="images/majthai.png" alt="..." />
                </a>
              </div>

              <div className="col-xs-6 col-md-4">
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
  WorkContainer: WorkContainer
}
