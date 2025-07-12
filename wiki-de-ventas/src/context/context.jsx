import React from "react";
import { useState, createContext, useEffect } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [showCardComplete, setShowCardComplete] = useState(false);
  const [cardId, setCardId] = useState(null);

//DARK MODE LOGIC
   const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  

  return (
    <context.Provider value={{ showCardComplete, setShowCardComplete, cardId, setCardId, darkMode, toggleTheme }}>
      {children}
    </context.Provider>
  );
};
