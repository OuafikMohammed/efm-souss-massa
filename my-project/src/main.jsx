import ReactDOM from "react-dom/client";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import App from "./App";
import AfficherProduits from "./components/InfoProd";
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)