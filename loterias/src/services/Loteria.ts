import { LoteriaProps } from "../types";
import api from "./api";

class Loteria {
    async get() :Promise<LoteriaProps> {
        return await api.get("/");
    }
}

const loteria = new Loteria();
export default loteria;