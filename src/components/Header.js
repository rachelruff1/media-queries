import React, { Component } from "react";
import "./Header.css";

export default function Header(){
    return (
      <div className="header-container" id='header'>
        <div>
          <div className="inline-items" />
          <ul>
            <li>
              <div id="brand-logo" href="#top">
                Start Bootstrap
              </div>
            </li>
            <div className="topnav" id='nav'>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }

