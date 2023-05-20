import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// class to class name
// href= "#" to "/"
// yeh changes krrna jaruri h

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

   const toggleMode = ()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode is enabled", "success")
    }
   }
  return (
   <>
   <Router>
    <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode} abouttxt = "About Us" />
    <Alert alert={alert} />
    <div className="container my-3" >
      <Routes>
          <Route exact path="/about" element={<About mode = {mode} />}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading = "Enter text to analyze" mode={mode} />}/>
      </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
