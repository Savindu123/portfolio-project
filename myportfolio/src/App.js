import React from "react";
import "./App.css";
import C1 from "./images/c1.jpg";
import C2 from "./images/c2.jpg";
import C3 from "./images/c3.jpg";
import C4 from "./images/c4.jpg";
import C5 from "./images/c5.jpg";
import C6 from "./images/c6.jpg";
import logo from "./images/logo.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";
import Typed from "react-typed"

//import Navbar from './components';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // function test(){
  //   console.log("clicked");
  //   alert("clicked");
  //  }
  return (
    <diV>
      {/* <button onclick={test()}>click </button> */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
            Savindu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://drive.google.com/file/d/1X0EjhXVpdDpXf2pws-c5LQ1PD_AySH__/view?usp=sharing">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <AliceCarousel>
        <img src={C1} className="slidering" alt="" />
        <img src={C2} className="slidering" alt="" />
        <img src={C3} className="slidering" alt="" />
        <img src={C4} className="slidering" alt="" />
        <img src={C5} className="slidering" alt="" />
        <img src={C6} className="slidering" alt="" />
      </AliceCarousel> */}
    
      <Card
        className="gradient"
        style={{
          width: "85.4rem",
          height: "30rem",
          // background: "linear-gradient(#003A6B, #AFC6D9)",
        }}
      >
        <div>
        {/* <h1 className="heading">Me, Myself & I</h1> */}
        <Typed className="heading"
      strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={100}
          backSpeed={150}
          loop
        />
        </div>
        <div>
          <p className="phara">
          “With the academic background, management and leadership skills and
          software engineering knowledge thatI haveacquiredovertheyears, my
          ambition is to work ina with a reputed organization whereIcouldfurther
          enhancemy initiatives, creativity and skillswhile
          sharingmyknowledgeand experience productivelyformy employer”</p>
        </div>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card>
    </diV>
  );
}

export default App;
