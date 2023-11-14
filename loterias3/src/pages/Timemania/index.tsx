import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png"
import { Acumulou, Carregando, Direita, Esquerda, Estimativa, NomeLoteria, Principal, Resultado } from "../../components";

export default function Timemania(){
    const {megasena:sorteio} = useLoteria();
    return (
        <>
        {
            sorteio.dataApuracao ?
        <Principal>
            <Esquerda>
                <NomeLoteria nome="MEGA-SENA" trevo={trevo} />
                <Estimativa dataProximoConcurso={sorteio.dataProximoConcurso} valorEstimadoProximoConcurso={sorteio.valorEstimadoProximoConcurso} />
            </Esquerda>
            <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
                <div className="mega-data-concurso">
                    {
                        `Concruso ${sorteio.numeroDoConcurso} ${sorteio.dataPorExtenso} `
                    }
                </div>
            </Direita>
        </Principal> : 
        <Carregando />
            }
        </>
    )
}