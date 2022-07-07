import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from "react";
import Alert from './Components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btn, setMybtn] = useState("dark mode")

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
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191970";
      showalert("You are on dark mode", "success");
      setMybtn("light mode");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("You are on light mode", "success");
      setMybtn("dark mode");

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleall={toggleall} btn={btn} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" index element={<TextForm showalert={showalert} heading="Write here to edit your text" mode={mode} />} />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}






export default App;
