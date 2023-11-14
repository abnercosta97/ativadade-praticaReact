import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import "./index.css";
import Menu from "../components/Menu";
import { ThemeProvider } from "styled-components";
import { useLoteria } from "../hooks";
import Timemania from "../pages/Timemania";

export default function Rotas() {
  const {tema} = useLoteria();
  return (
    <ThemeProvider theme={tema}>
    <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/" element={<Megasena />} />
        <Route path="/megasena" element={<Megasena />} />
        <Route path="/timemania" element={<Timemania />} />
        <Route path="/quina" element={<Quina />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

