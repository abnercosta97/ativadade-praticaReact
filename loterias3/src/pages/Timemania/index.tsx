import { useLoteria } from "../../hooks";
import trevo from "../../assets/trevo-timemania.png"
import { Acumulou, Carregando, Data, Direita, Esquerda, Estimativa, NomeLoteria, Principal, Resultado } from "../../components";

export default function Timemania(){
    const {timemania:sorteio} = useLoteria();
    return (
        <>
        {
            sorteio.dataApuracao ?
        <Principal>
            <Esquerda>
                <NomeLoteria nome="TIMEMANIA" trevo={trevo} />
                <Estimativa dataProximoConcurso={sorteio.dataProximoConcurso} valorEstimadoProximoConcurso={sorteio.valorEstimadoProximoConcurso} />
            </Esquerda>
            <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
            <Data
              dataPorExtenso={sorteio.dataPorExtenso}
              numeroDoConcurso={sorteio.numeroDoConcurso}
            />
            </Direita>
        </Principal> : 
        <Carregando />
            }
        </>
    )
}