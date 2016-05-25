import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var CannesEvents = React.createClass({
  getInitialState: function() {
    return {
      pageTitle: 'Official Cannes Event Schedule'
    }
  },
  render: function() {
    return (
      <div>
        <Header pageTitle={this.state.pageTitle} />
        <section className="main-content -p-v-4 -p-h-2">
          <div className="container"> 
            <p>Cannes Events page content goes here.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = CannesEvents;
