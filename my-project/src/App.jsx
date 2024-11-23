// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Affiche from './components/Affiche';
// import Recherche from './components/Recherche';
// import Menu from './components/Menu';
// import AfficherProduits from './components/InfoProd';
// function App() {
//     const [produits, setProduits] = useState([]);

//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then(response => response.json())
//             .then(data => setProduits(data.products)) // Adjusting to match the structure of DummyJSON
//             .catch(error => console.error("Erreur lors de la récupération des produits :", error));
//     }, []);

//     return (
//         <Router>
//             <div>
//                 <Menu />
//                 <Routes>
//                     <Route path="/" element={<h1>Bienvenue sur notre site de produits</h1>} />
//                     <Route path="/affiche" element={<Affiche produits={produits} />} />
//                     <Route path="/recherche" element={<Recherche produits={produits} />} />
//                     <Route path="/infos" element={<AfficherProduits />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;
import ListProduit from './components/ListProduits';
import AddProduit from './components/AddProduits';
import { Provider } from 'react-redux';
import store from './index';
function App() {
    return (
          <Provider store={store}>
            <AddProduit />
            <ListProduit />
          </Provider>
            
    );
}

export default App;