'use strict';

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="bg-red">
          <div className="container">
            <img className="logo" src="/images/logo-inverse.svg" />
          </div>      
        </div>
        <div className="bg-white -p-v-4">
          <div className="container type-center -p-b-3">
            <h2 className="type-bold type-caps type-red type-wide underline -m-a-3">Cannes Lions</h2>
            <h4 className="type-blue type-caps type-wide">Almost everything<br/>you need to know</h4>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
