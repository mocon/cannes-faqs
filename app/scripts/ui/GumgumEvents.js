import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var GumgumEvents = React.createClass({
  getInitialState: function() {
    return {
      pageTitle: 'Official GumGum Event Schedule'
    }
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    return (
      <div>
        <Header pageTitle={this.state.pageTitle} />
        <section className="main-content -p-v-4 -p-h-2">
          <div className="container"> 
            <p>GumGum Events page content goes here.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = GumgumEvents;
