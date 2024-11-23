import { useState } from "react";

export default function AfficherProduits() {
    const [produits, setProduits] = useState([]);
    const [produit, setProduit] = useState({
        reference: '',
        nomProduit: '',
        categorie: '',
        description: '',
        prix: '',
        imageProduit: '',
    });

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (produit.reference && produit.nomProduit && produit.categorie && produit.description && produit.prix && produit.imageProduit) {
            setProduits([...produits, produit]);
            setProduit({
                reference: '',
                nomProduit: '',
                categorie: '',
                description: '',
                prix: '',
                imageProduit: '',
            });
        }
    };

    const handleReferenceChange = (e) => {
        setProduit({ ...produit, reference: e.target.value });
    };

    const handleNomProduitChange = (e) => {
        setProduit({ ...produit, nomProduit: e.target.value });
    };

    const handleCategorieChange = (e) => {
        setProduit({ ...produit, categorie: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setProduit({ ...produit, description: e.target.value });
    };

    const handlePrixChange = (e) => {
        setProduit({ ...produit, prix: e.target.value });
    };

    const handleFileChange = (e) => {
        setProduit({ ...produit, imageProduit: URL.createObjectURL(e.target.files[0]) });
    };

    return (
    <>  
        <h1 className="text-4xl font-bold mb-4">Gestion des Produits :</h1>
        <div className="flex">
            <form onSubmit={handleAddProduct} className="mr-8 p-4 bg-white shadow-md rounded-lg">
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Référence:</label>
                    <input type="text" value={produit.reference} onChange={handleReferenceChange} className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Nom du Produit:</label>
                    <input type="text" value={produit.nomProduit} onChange={handleNomProduitChange} className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Catégorie:</label>
                    <select value={produit.categorie} onChange={handleCategorieChange} className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm">
                        <option value="">Sélectionner une catégorie</option>
                        <option value="Electronics">Électronique</option>
                        <option value="Clothing">Vêtements</option>
                        <option value="Food">Alimentation</option>
                    </select>
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Description:</label>
                    <textarea value={produit.description} onChange={handleDescriptionChange} className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Prix:</label>
                    <input type="number" value={produit.prix} onChange={handlePrixChange} className="mt-1 block w-3/4 border-gray-300 rounded-md shadow-sm" />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 w-1/4">Image du Produit:</label>
                    <input type="file" onChange={handleFileChange} className="mt-1 block w-3/4 text-gray-700" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">Valider</button>
            </form>
            <div>
                <h2 className="text-xl font-bold mb-4">Liste des Produits</h2>
                <ul>
                    {produits.map((prod, index) => (
                        <li key={index} className="mb-4 p-4 bg-white shadow-md rounded-lg">
                            <img src={prod.imageProduit} alt={prod.nomProduit} className="w-24 h-24 object-cover mb-2" />
                            <p><strong>Référence:</strong> {prod.reference}</p>
                            <p><strong>Nom:</strong> {prod.nomProduit}</p>
                            <p><strong>Catégorie:</strong> {prod.categorie}</p>
                            <p><strong>Description:</strong> {prod.description}</p>
                            <p><strong>Prix:</strong> {prod.prix} €</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
        
    );
}