import { Actions } from './../types/store';
import { apiProducts } from '../services/getData';
import { Product } from '../types/productTypes';



export const addToCart = (payload: Product) => {
    return {
        
        action: Actions.ADD_TO_CART,
   
        payload: payload,
    };
};

export const removeFromCart = (payload: number) => {
    return {
        action: Actions.REMOVE_FROM_CART,
        payload: payload, 
    };
};


export const getProductsState = async () => {
    const data = await apiProducts()
    return {
        action: Actions.GET_PRODUCTS,
        payload: data,
    };
};