var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var WorkContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container">
          <div className="row">
            <div className="col-md-12 myWorkSection">

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/1.2-octocats/" className="thumbnail">
                      <img src="images/octocat.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/1.4-pixel-perfect/" className="thumbnail">
                      <img src="images/surf.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb thumb-image">
                    <a href="https://mcverticchio.github.io/2.2-sass-bootstrap/" className="thumbnail">
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
