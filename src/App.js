// import logo from './logo.svg';

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from "react";
import Alert from './Components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btn, setMybtn] = useState("Enable dark mode")

  const showalert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleall = () => {
    // console.log(cls);
    // removeclasses();
    // document.body.classList.add('bg-' + cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191970";
      showalert("You are on dark mode", "success");
      setMybtn("Enable light mode");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("You are on light mode", "success");
      setMybtn("Enable dark mode");

    }
  }
  return (
    <>



      {/* <Router> */}
        <Navbar title="JD classes" mode={mode} toggleall={toggleall} btn={btn} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route>
            <Route exact path="/"> */}
              <TextForm showalert={showalert} heading="This is a text box you can write here" mode={mode} />
            {/* </Route> */}


          {/* </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}






export default App;
