import create from 'zustand';
import { fetchProducts } from '../api/index';

const useStore = create((set) => {
  const localProducts = localStorage.getItem('products');

  return {
    products: localProducts ? JSON.parse(localProducts) : [], 
    cart: [],
    fetchProducts: async () => {
      const products = await fetchProducts();
      set({ products });
      localStorage.setItem('products', JSON.stringify(products));
    },
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  };
});

export default useStore;

