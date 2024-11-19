import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '../types/types';

interface productState {
  products: Product[];
  addProduct: ( product: Product & { quantity: number } ) => void;
  removeProduct: ( product: Product ) => void;
  findProduct: ( id: number ) => boolean
  updateProduct: ( id: number, quantity: number ) => void
  totalQuantity: () => number
  totalPrice: () => number
  plusOneQuantity: ( id: number ) => void
  minusOneQuantity: ( id: number ) => void
}

export const useProductStore = create<productState>() ( ( 
  persist(
    ( set, get ) => ({
      products: [],

      addProduct: ( product ) => set( ( state ) => ( { products: [ ...state.products, { ...product, quantity: product.quantity } ]}) ),
      
      removeProduct: ( product ) => set( ( state ) => ( { products: state.products.filter( ( newProduct ) => newProduct.id !== product.id )})),
      
      findProduct: (id: number) => {
        const state = get();
        return state.products.some((product) => product.id === id);
      },

      updateProduct: (id: number, quantity: number) => {
        const state = get(); 
        return set({
          products: state.products.map((product) => {
            if (product.id === id) {
              return { ...product, quantity: product.quantity + quantity };
            }
            return product;
          }),
        });
      },

      totalQuantity: () => {
        const state = get();
        return state.products.reduce((total, product) => total + product.quantity, 0);
      },

      totalPrice: () => {
        const state = get();
        const total = state.products.reduce((total, product) => total + product.price * product.quantity, 0);
        return parseFloat(total.toFixed(2)); 
      },

      plusOneQuantity: (id: number) => {
        const state = get();
        const updatedProducts = state.products.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        set({ products: updatedProducts });
      },

      minusOneQuantity: (id: number) => {
        const state = get();
        const updatedProducts = state.products.map((product) => {
          if (product.id === id && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        set({ products: updatedProducts });
      }

    }), 
    {
      name: 'products-store', 
    }
  )
 ) 
)  