import { useSelector } from 'react-redux';

const ListProduit = () => {
    const produits = useSelector(state => state.produits);

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Liste des Produits</h1>
            <ul className="list-disc pl-5">
                {produits.map(produit => (
                    <li key={produit.ref} className="mb-2">
                        <span className="font-semibold">{produit.nom}</span> | Catégorie: {produit.categorie}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListProduit;