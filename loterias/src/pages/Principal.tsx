import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import { useLoteria } from "../hooks"
import "./index.css";

export default function Principal() {
    const {megasena} = useLoteria();
    console.log(megasena);
    return (
        <div>
            {
                megasena.dataApuracao ?
                <div className="principal-bloco">
                    <Megasena />
                    <Lotofacil />
                    <Quina />
                </div>
                : 
                <div>Carregando...</div>
            }
        </div>
    )
}