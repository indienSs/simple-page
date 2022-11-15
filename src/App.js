import React from "react";

const App = () => (
  <div className="app">
    <img src="/images/photo.jpg" 
    alt="profile-photo" 
    className="photo" />
    <h1 className="title">Oleg Andrianov</h1>
    <h4 className="profession">Frontend developer</h4>
    <p className="website">Simple website</p>
    <div className="buttons">
      <button className="email-button">
        <img src="/images/mail.png" 
        alt="" 
        className="email-logo"
        />
        Email
      </button>
      <button className="github-button">
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
      <img src="/images/facebook.png" alt="" className="footer-logo" />
      <img src="/images/instagram.png" alt="" className="footer-logo" />
      <img src="/images/twitter.png" alt="" className="footer-logo" />
    </footer>
  </div>
);

export default App;
