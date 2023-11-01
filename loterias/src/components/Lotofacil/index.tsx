import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png"

export default function Lotofacil(){
    const {lotofacil} = useLoteria();

    const um = [], dois = [], tres = [];
    for(let i = 0; i < 5; i++){
        um.push(lotofacil.dezenas[i]);
    }
    for(let i = 5; i < 10; i++){
        dois.push(lotofacil.dezenas[i]);
    }
    for(let i = 10; i < 15; i++){
        tres.push(lotofacil.dezenas[i]);
    }

    return (
        <div className="loto-bloco-principal">
            <div >
                <div className="loto-bloco-loteria">
                    <img src={trevo} alt="Lotofácil" />
                    <span className="loto-nome-loteria">LOTOFÁCIL</span>
                </div>
                <div className="loto-bloco-estimativa">
                    <div className="loto-texto-estimativa">
                        Estimativa de prêmio do próximo concurso. Sorteio em {lotofacil.dataApuracao}
                    </div>
                    <div className="loto-valor-estimativa">
                        {lotofacil.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style:"currency", currency:"BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="loto-bloco-direita">
                <div className="loto-linha-bola">
                    {
                        um.map(
                            um => <div className="loto-bola" key={um}>{um}</div>
                        )
                    }
                </div>
                <div className="loto-linha-bola">
                    {
                        dois.map(
                            dois => <div className="loto-bola" key={dois}>{dois}</div>
                        )
                    }
                </div>
                <div className="loto-linha-bola">
                    {
                        tres.map(
                            tres => <div className="loto-bola" key={tres}>{tres}</div>
                        )
                    }
                </div>
                <div className="loto-texto-acumulou">
                    {
                        lotofacil.acumulado ? "ACUMULOU!" : ""
                    }
                </div>
                <div className="loto-data-concurso">
                    {
                        `Concruso ${lotofacil.numeroDoConcurso} ${lotofacil.dataPorExtenso} `
                    }
                </div>
            </div>
        </div>
    )
}