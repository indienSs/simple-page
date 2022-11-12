import React from "react";
import "./style.css";

const App = () => (
  <div className="app">
    <img src="https://sun4.userapi.com/sun4-16/s/v1/ig2/LCN6jdbyxtvBO5s7ZkLd4n-alXF0fUOrok7Phi2zd28l1_Hbuq-rGu3Hc2L_9UPi6xOZZrRODU6JQ4o1ft2JhIjG.jpg?size=810x1080&quality=96&type=album" 
    alt="profile-photo" 
    className="photo" />
    <h1 className="title">Oleg Andrianov</h1>
    <h4 className="profession"> Frontend developer</h4>
    <p className="website">Simple website</p>
    <div className="buttons">
      <button className="email-button">
        <img src="./mail.png" 
        alt="" 
        className="email-logo"
        />
        Email
      </button>
      <button className="github-button">
        <img src="./github.png" 
        alt="" 
        className="github-logo"/>
        Github
        </button>
    </div>
    <div className="information">
      <h3>About</h3>
      <p>
        Some kind of interesting information about me to understand that I am so
        special and interested in this work
      </p>
      <h3>Interests</h3>
      <p>
        Topic about that I have some interests except coding and lying down on
        my sofa
      </p>
    </div>
    <footer className="footer">
      <img src="./instagram" alt="" className="footer-logo" />
      <img src="./facebook" alt="" className="footer-logo" />
      <img src="./twitter" alt="" className="footer-logo" />
    </footer>
  </div>
);

export default App;
