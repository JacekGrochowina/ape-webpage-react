import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* Fonts Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

/* Styles */
import '../styles/main.css';

/* Layouts */
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
// import Footer from './Footer';

class App extends Component {

  render() {

    library.add(
      fab,
      faChevronLeft,
      faChevronRight,
      faMobileAlt,
      faEnvelope,
      faMapMarkerAlt,
    );

    return (
      <Router>
        <div className="app">

          {<Header />}
          {<Navigation />}

          <main>
            {<Page />}
          </main>

          <footer>
            {/* {<Footer />} */}
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
