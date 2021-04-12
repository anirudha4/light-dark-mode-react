import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [theme, setTheme] = useState();
  const changeTheme = () => {
    if (isLight) {
      setTheme({
        color: "#333333",
        background: "#f4f4f4"
      });
    } else {
      setTheme({
        color: "#ddd",
        background: "#333333"
      });
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, setIsLight, isLight, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
