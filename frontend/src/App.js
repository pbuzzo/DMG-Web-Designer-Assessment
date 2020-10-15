import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Toyota4Rav from "./components/Toyota4Rav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/the-2020-Toyota-RAV4-model-features-Hunt-Valley" component={Toyota4Rav} />
        </div>
      </Router>
    );
  }
}

export default App;
