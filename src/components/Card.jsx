import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
const Card = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="card">
      <div className="card-header">
        <p className="title">Dark Mode Example</p>
        <span className="fas fa-ellipsis-v"></span>
      </div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio
        cumque eos? Ea dolore illum totam quae commodi rem dolor?
      </div>
    </div>
  );
};

export default Card;
