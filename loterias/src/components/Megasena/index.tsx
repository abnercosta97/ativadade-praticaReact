import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png"

export default function Megasena(){
    const {megasena} = useLoteria();
    return (
        <div className="mega-bloco-principal">
            <div >
                <div className="mega-bloco-loteria">
                    <img src={trevo} alt="Megasena" />
                    <span className="mega-nome-loteria">MEGA-SENA</span>
                </div>
                <div>
                    <div>
                        Estimativa de prêmio do próximo concurso. Sorteio em {megasena.dataApuracao}
                    </div>
                    <div>
                        {megasena.valorEstimadoProximoConcurso }
                    </div>
                </div>
            </div>
            <div className="mega-bloco-direita">
                Direita
            </div>
        </div>
    )
}