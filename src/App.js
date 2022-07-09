import React, { useState, useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./colors";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

const App = () => {
  
  const theme = useContext(ThemeContext)[0]
  const currectTheme = AppTheme[theme]


  const themeHook = useState("light");
  return (
    <ThemeContext.Provider
      value={themeHook}
      style={{
        height:"100vh",
        padding:"1rem",
        backgroundColor:`${currectTheme.backgroundColor}`,
        color:`${currectTheme.textColor}`,
        textAlign:"center"
      }}
    >
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
