import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";
import { mega, quina, timemania } from "../../styles/theme";

export default function Menu() {
  const {ativo, setAtivo, setTema} = useLoteria();
    return (
      <div className="menu">
        <Link to="megasena" onClick={() => {
           setAtivo("megasena");
            setTema(mega);
          }
           }className={ativo === "megasena" ? "ativo" : "menu-mega"}>Megasena</Link>
        <Link to="timemania" onClick={
          () =>{ 
            setAtivo("timemania");
            setTema(timemania);
          }} className={ativo === "timemania" ? "ativo" : "timemania"}>Timemania</Link>
        <Link to="quina" onClick={() => {
           setAtivo("quina");
           setTema(quina);
           }} className={ativo === "quina" ? "ativo" : "menu-quina"}>Quina</Link>
      </div>
    );
  }