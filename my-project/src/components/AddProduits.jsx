import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduit } from '../actions';

const AddProduit = () => {
    const [produit, setProduit] = useState({ ref: '', nom: '', categorie: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProduit({ ...produit, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduit(produit));
        setProduit({ ref: '', nom: '', categorie: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700">Référence:</label>
                <input 
                    type="text" 
                    name="ref" 
                    value={produit.ref} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nom:</label>
                <input 
                    type="text" 
                    name="nom" 
                    value={produit.nom} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Catégorie:</label>
                <input 
                    type="text" 
                    name="categorie" 
                    value={produit.categorie} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
                Ajouter Produit
            </button>
        </form>
    );
};

export default AddProduit;