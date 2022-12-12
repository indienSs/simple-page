import React, { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleChange = () => {
    setIsBlack((prev) => !prev);
    console.log(isBlack);
  };

  return (
    <div className="app">
      <Body setColor={handleChange} isBlack={isBlack} />
      <Footer isBlack={isBlack} />
    </div>
  );
};

export default App;
