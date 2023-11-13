import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";

export default function Menu() {
  const {ativo, setAtivo} = useLoteria();
    return (
      <div className="menu">
        <Link to="megasena" onClick={() => setAtivo("megasena")}className={ativo === "megasena" ? "ativo" : "menu-mega"}>Megasena</Link>
        <Link to="lotofacil" onClick={() => setAtivo("lotofacil")} className={ativo === "lotofacil" ? "ativo" : "menu-loto"}>Lotofácil</Link>
        <Link to="quina" onClick={() => setAtivo("quina")} className={ativo === "quina" ? "ativo" : "menu-quina"}>Quina</Link>
      </div>
    );
  }