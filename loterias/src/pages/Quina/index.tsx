import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-quina.png";

export default function Quina() {
  const { quina } = useLoteria();
  return (
    <>
      {quina.dataApuracao ? (
        <div className="quina-bloco-principal principal">
          <div>
            <div className="quina-bloco-loteria">
              <img src={trevo} alt="quina" />
              <span className="quina-nome-loteria">QUINA</span>
            </div>
            <div className="quina-bloco-estimativa">
              <div className="quina-texto-estimativa">
                Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                {quina.dataApuracao}
              </div>
              <div className="quina-valor-estimativa">
                {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          </div>
          <div className="quina-bloco-direita">
            <div className="quina-linha-bola">
              {quina.dezenas.map((dezena) => (
                <div className="quina-bola" key={dezena}>
                  {dezena}
                </div>
              ))}
            </div>
            <div className="quina-texto-acumulou">
              {quina.quantidadeGanhadores
                ? `${quina.quantidadeGanhadores} GANHADOR`
                : ""}
            </div>
            <div className="quina-data-concurso">
              {`Concruso ${quina.numeroDoConcurso} ${quina.dataPorExtenso} `}
            </div>
          </div>
        </div>
      ) : (
        <div className="prinpal-carregando">Carregando...</div>
      )}
    </>
  );
}
