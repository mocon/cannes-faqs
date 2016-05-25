import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './ui/Home'
import Emergency from './ui/Emergency'
import Flights from './ui/Flights'
import Accommodations from './ui/Accommodations'
import GumgumEvents from './ui/GumgumEvents'
import CannesEvents from './ui/CannesEvents'
import ThingsToKnow from './ui/ThingsToKnow'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/sos/" component={Emergency} />
    <Route path="/flights/" component={Flights} />
    <Route path="/accommodations/" component={Accommodations} />
    <Route path="/gumgum-events/" component={GumgumEvents} />
    <Route path="/cannes-events/" component={CannesEvents} />
    <Route path="/faq/" component={ThingsToKnow} />
  </Router>
), document.querySelector('#app'));
