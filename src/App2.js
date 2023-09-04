// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Form"
import About from './components/about';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Example from './components/Example';

//  TEXT UTILS 

// adding bootstrap to our project 
function App() {
  const [mode, setmode] = useState("light")

  const [alert, setAlert] = useState(null)

  var callAlert = (message) => {

    setAlert(message)

    setTimeout(() => {

      setAlert(null)
      document.getElementById("p2").style.display = "none";

    }, 1000);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setmode("dark")
      document.body.style.backgroundColor = "#000000c4"
      document.body.style.color = "white"
      document.getElementById("p2").style.display = "block";
      callAlert(" dark mode is activated ") // calling the function which updates the value of setalert

      document.title = "TEXTUTIL - darkmode on " // changing the title dynamically 
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("p2").style.display = "block";
      callAlert("light mode is activated")
      document.title = "TEXTUTIL - lightmode on "

    }

  }

  // setInterval(() => {// this will change the title in every 1.5 seconds 
  //   document.title = "TEXTUTIL -thank you "
  // }, 1500);
  // setInterval(() => {
  //   document.title = "TEXTUTIL - for visiting us  "
  // }, 3000);


  return (
    <>
      <Router>



        <Navbar title={"TextUtils"} about="ABOUT" navMode={mode} toggle={toggleMode} /> 
       
        {/* sending the props title and about to the component navbar  */}

        <Alert alert={alert} />
        <div className="container">







          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


          <Routes>




            <Route path='/About' element={<About aboutTitle="About" />} />
            {/* performing routing  */}

            <Route path="/" element={<Form mode={mode} alert={callAlert} formTitle="TextUtil -Home" />} />



          </Routes>

        
        </div>


      </Router >



    </>
    // using the navbar component which contains bootsrap for our navbar 
  );
}

export default App;
