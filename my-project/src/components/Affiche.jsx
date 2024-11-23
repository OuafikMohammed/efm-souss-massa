function Affiche({ produits }) {
    
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Liste des Produits</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Référence</th>
                        <th className="py-2 px-4 border-b">Nom du Produit</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Prix</th>
                        <th className="py-2 px-4 border-b">Catégorie</th>
                        <th className="py-2 px-4 border-b">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((produit) => (
                        <tr key={produit.id}>
                            <td className="py-2 px-4 border-b">{produit.id}</td>
                            <td className="py-2 px-4 border-b">{produit.nomP}</td>
                            <td className="py-2 px-4 border-b">{produit.descP}</td>
                            <td className="py-2 px-4 border-b">{produit.prixP} €</td>
                            <td className="py-2 px-4 border-b">{produit.categorie.nomC}</td>
                            <td className="py-2 px-4 border-b">
                                <img src={produit.thumbnail} alt={produit.nomP} className="w-24 h-24 object-cover" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Affiche