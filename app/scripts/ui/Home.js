import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <section className="main-content -p-v-4 -p-h-2">
          <div className="container"> 
            <p>Bonjour and welcome to Cannes! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non lacus vitae quam varius dapibus ac id est. Cras in malesuada mi. Nulla facilisi. Proin fringilla justo eu leo posuere, a dapibus mauris eleifend. Donec luctus, arcu vitae efficitur dapibus, velit orci gravida urna, et rhoncus quam neque ac enim.</p>

            <Link to="/sos/">
              <div className="button-lg type-center button-emergency border-radius-md -p-v-5 -p-h-3">
                <h3 className="type-bold type-caps">Emergency Information</h3>
              </div>
            </Link>
            <Link to="/flights/">
              <div className="button-lg type-center border-radius-md -p-v-5 -p-h-3">
                <h3>Flight Schedules</h3>
              </div>
            </Link>
            <Link to="/accommodations/">
              <div className="button-lg type-center border-radius-md -p-v-5 -p-h-3">
                <h3>Accommodations</h3>
              </div>
            </Link>
            <Link to="/gumgum-events/">
              <div className="button-lg type-center border-radius-md -p-v-5 -p-h-3">
                <h3>GumGum Event Schedule</h3>
              </div>
            </Link>
            <Link to="/cannes-events/">
              <div className="button-lg type-center border-radius-md -p-v-5 -p-h-3">
                <h3>Cannes Lions Event Schedule</h3>
              </div>
            </Link>
            <Link to="/faq/">
              <div className="button-lg type-center border-radius-md -p-v-5 -p-h-3">
                <h3>Things to Know</h3>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Home;
