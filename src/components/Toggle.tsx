import React, { useState } from 'react';
import "./Toggle.css"
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const styles = {
    section: {
      fontSize: "18px",
      color: "#292b2c",
      backgroundColor: "#fff",
      padding: "0 20px"
    },
    wrapper: {
      textAlign: "center",
      margin: "0 auto",
      marginTop: "50px"
    }
  }

  return (
    <div className={isDarkMode ? "app-container dark" : "app-container light"}>
    
      <button onClick={toggleTheme}>Toggle Theme</button>
   
    </div>
  );
};

export default Toggle;
