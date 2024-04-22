// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import SocialAccounts from './components/SocialAccounts'; // Import the SocialAccounts component
import '@fortawesome/fontawesome-free/css/all.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2f0443';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#19bdaf';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Text Analyzer - character counter, word counter, remove extra spaces" mode={mode} />
          </Route>
        </Switch>
      </div>
      {/* Render the SocialAccounts component */}
      <SocialAccounts />
    </Router>
  );
}

export default App;