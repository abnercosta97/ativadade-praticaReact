import { useLoteria } from "../../hooks";
import trevo from "../../assets/trevo-quina.png";
import {
  Acumulou,
  Carregando,
  Data,
  Direita,
  Esquerda,
  Estimativa,
  NomeLoteria,
  Principal,
  Resultado,
} from "../../components";

export default function Quina() {
  const { quina: sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <NomeLoteria nome="QUINA" trevo={trevo} />
            <Estimativa
              dataProximoConcurso={sorteio.dataProximoConcurso}
              valorEstimadoProximoConcurso={
                sorteio.valorEstimadoProximoConcurso
              }
            />
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas} />
            <Acumulou quantidadeGanhadores={sorteio.quantidadeGanhadores} />
            <Data
              dataPorExtenso={sorteio.dataPorExtenso}
              numeroDoConcurso={sorteio.numeroDoConcurso}
            />
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
