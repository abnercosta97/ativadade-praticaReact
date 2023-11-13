import { Provider } from "./contexts";
import Rotas from "./routes";
//import Principal from "./pages/Principal";


export default function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

