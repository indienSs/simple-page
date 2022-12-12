import React from "react";

const Footer = (props) => {
  const styles = {
    backgroundColor: props.isBlack ? "#161619" : "#d5d4d8",
  };

  return (
    <footer className="footer" style={styles}>
      <a href="https://facebook.com/indienss.mine" target="_blank">
        <img src="/images/facebook.png" alt="" className="footer-logo" />
      </a>
      <a href="https://instagram.com/andrianov.97" target="_blank">
        <img src="/images/instagram.png" alt="" className="footer-logo" />
      </a>
      <a href="https://twitter.com/click_exitpls" target="_blank">
        <img src="/images/twitter.png" alt="" className="footer-logo" />
      </a>
    </footer>
  );
};

export default Footer;
