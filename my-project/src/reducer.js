import { ADD_PRODUIT, DELETE_PRODUIT } from './actions';

const initState = {
    produits: [
        { ref: 7, nom: "PC HP", categorie: "informatique" },
        { ref: 8, nom: "SKYWORTH", categorie: "TV" }
    ]
};

const produitReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUIT:
            return {
                ...state,
                produits: [...state.produits, action.payload]
            };
        case DELETE_PRODUIT:
            return {
                ...state,
                produits: state.produits.filter(produit => produit.ref !== action.payload)
            };
        default:
            return state;
    }
};

export default produitReducer;