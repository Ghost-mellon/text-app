// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Invoices from './components/Invoices';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {


         //this mode is connected to Navbar.js in {props.mode}
  const [mode, setMode] = useState('light'); //Dark mode or not


  // CODE FOR ALERT MESSAGE CONNECTIN~G TO TOGGLE SWITCH
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {

      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // TOGGLE SWITCH CODE

  const toggleMode = () => {
    if (mode === 'light') {
         setMode('dark')
         document.body.style.backgroundColor = '#3d4c72';
         showAlert("Dark Mode has been enabled", "success")
        }else{
          setMode('light') 
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
  <>

    {/* <Navbar title='Text Utils' mode={mode}></Navbar> */}
  

    <Navbar title='textUtils' home='Home' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
     
     <Route exact path="/" element={<TextForm mode={mode} heading="Enter Text to Analize Here" textInfo="Enter Words Down Here"/>}></Route>
      
     <Route exact path="/about" element={<About mode={mode} showAlert={showAlert}/>}></Route>
     <Route exact path="/invoices" element={<Invoices/>}></Route>
    
    </Routes>
      
    
      
    

          
        

  

  </>   
  );
}

export default App;
 