import { Link } from "react-router-dom";
import "./index.css";

export default function Menu() {
    return (
      <div className="menu">
        <Link to="megasena" className="menu-mega">Megasena</Link>
        <Link to="lotofacil" className="menu-loto">Lotofácil</Link>
        <Link to="quina" className="menu-quina">Quina</Link>
      </div>
    );
  }