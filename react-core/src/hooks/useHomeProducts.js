import useFetchProducts from "./useFetchProducts";

export default function useHomeProducts() {
  const { products, loading, error } = useFetchProducts();

  const getNewCollection = () => [...products].sort((a,b) => b.createdAt - a.createdAt).slice(0,15);
  const getTopSelling = () => [...products].sort((a,b) => b.popularity - a.popularity).slice(0,8);
  const getPopularProducts = () => [...products].sort((a,b) => b.rating - a.rating).slice(0,8);
  const getTrendingProducts = () => [...products].sort(() => 0.5 - Math.random()).slice(0,8);

  return { products, loading, error, getNewCollection, getTopSelling, getPopularProducts, getTrendingProducts };
}
