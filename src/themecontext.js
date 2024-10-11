import React, { createContext, useState } from 'react'

export const Themecontext = createContext();

export const Themeprovider = ({ children }) => {
  const [theme, settheme] = useState("light");

  function changetheme() {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <Themecontext.Provider value={{ theme, changetheme }}>
      {children}
    </Themecontext.Provider>
  );
};
