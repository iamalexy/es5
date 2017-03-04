var React = require('react');
var ReactDOM = require('react-dom');
//Try creating various components using createClass
//Send multiple properties to the components
//Try changing the container string app and do corresponding change in index.html

var Header2 = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.testPropHeading2}</h2>
      </div>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Test basic React App</h1>
        <Header2 testPropHeading2="Sent heading as Prop1"/>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
      <App/>
      <Header2 testPropHeading2="Sent heading as Prop2"/>
  </div>
  ,  document.getElementById("app"));
