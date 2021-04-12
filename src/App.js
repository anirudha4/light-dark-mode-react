import "./styles.css";
// import Card from "./components/Card";
// import { useState } from "react";
// export default function App() {
//   const [isLight, setIslight] = useState(false);
//   const [darkTheme, setDarkTheme] = useState({
//     color: "#ddd",
//     background: "#111"
//   });
//   const [lightTheme, setLightTheme] = useState({
//     color: "#333",
//     background: "#fff"
//   });
//   return (
//     <div
//       className="container"
//       style={{ background: isLight ? "#fcfcfc" : "#111" }}
//     >
//       <div
//         className="toggle"
//         onClick={(e) => setIslight(!isLight)}
//         style={{ color: isLight ? "#333" : "#ddd" }}
//       >
//         <span className={isLight ? "fas fa-sun" : "fas fa-moon"}></span>
//       </div>
//       <Card theme={isLight ? lightTheme : darkTheme} />
//     </div>
//   );
// }

import Card from "./components/Card";
import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const { theme, setIsLight, isLight, changeTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setIsLight((prevState) => !prevState);
    changeTheme();
  };
  return (
    <div className="container" style={theme}>
      <div className="toggle" onClick={handleTheme}>
        <span className={isLight ? "fas fa-sun" : "fas fa-moon"}></span>
      </div>
      <Card />
    </div>
  );
};
export default App;
