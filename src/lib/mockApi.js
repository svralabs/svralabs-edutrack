export async function fetchFeaturedProducts() {
  return [
    { id: '1', title: 'Featured Item 1', price: 29.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500' },
    { id: '2', title: 'Featured Item 2', price: 19.50, rating: 4.7, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500' }
  ];
}
export const mockApi = {
  get: async () => ({ data: [] }),
  post: async () => ({ data: { success: true } })
};
export default mockApi;
