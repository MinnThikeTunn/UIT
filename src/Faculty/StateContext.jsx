import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <StateContext.Provider value={{ showFirst, setShowFirst }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
