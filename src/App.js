import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import About from './components/About';
import './App.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'textutils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'textutils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" homeAbout="Home1" aboutText="About Hi" mode={mode} toggleMode={toggleMode} />
         {/* <Alert alert={alert} /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Textutils- Word Counter, Character Counter and 
            Remove the extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
