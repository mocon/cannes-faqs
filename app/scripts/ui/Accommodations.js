import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var Accommodations = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <section className="main-content -p-v-4 -p-h-2">
          <div className="container"> 
            <p>Accommodations page content goes here.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Accommodations;
