// src/stores/cartStore.jsx
export const useCartStore = (set) => ({
  cartItems: [],
  addItem: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
});
