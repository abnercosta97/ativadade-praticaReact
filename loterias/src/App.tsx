import { useEffect, useState } from "react";
import loteria from "./services/Loteria";


export default function App() {
  const [megasena, setMegasena] = useState({});
  const [lotofacil, setLotofacil] = useState({});

  async function testar(){
    loteria.get()
    .then(r => {
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
    })
    .catch(e => console.log(e.message));
  }
  useEffect(
    () => {
      testar();
    }
    ,[]
    );

  return (
    <div>
      Loterias
    </div>
  );
}

