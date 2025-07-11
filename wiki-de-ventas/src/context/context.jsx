import React from "react";
import { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [showCardComplete, setShowCardComplete] = useState(false);
  const [cardId, setCardId] = useState(null);

  return (
    <context.Provider value={{ showCardComplete, setShowCardComplete, cardId, setCardId }}>
      {children}
    </context.Provider>
  );
};
