export const ADD_PRODUIT = 'ADD_PRODUIT';
export const DELETE_PRODUIT = 'DELETE_PRODUIT';

export const addProduit = (produit) => ({
    type: ADD_PRODUIT,
    payload: produit
});

export const deleteProduit = (ref) => ({
    type: DELETE_PRODUIT,
    payload: ref
});