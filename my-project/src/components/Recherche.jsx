import React, { useState } from 'react';

function Recherche({ produits }) {
    const [categorie, setCategorie] = useState('');
    const [resultats, setResultats] = useState([]);

    const handleSearch = () => {
        const filteredProduits = produits.filter(produit => produit.category.toLowerCase() === categorie.toLowerCase());
        setResultats(filteredProduits);
    };

    return (
        <div>
            <h1>Recherche Par Catégorie</h1>
            <input 
                type="text" 
                value={categorie} 
                onChange={(e) => setCategorie(e.target.value)} 
                placeholder="Entrez une catégorie" 
                className="border p-2 mb-4"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded-md">Rechercher</button>
            <h2>Résultat:</h2>
            {resultats.length === 0 ? (
                <p>Aucun produit à afficher</p>
            ) : (
                <ul>
                    {resultats.map((produit) => (
                        <li key={produit.id}>
                            {produit.title} | prix : {produit.price} €
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Recherche;