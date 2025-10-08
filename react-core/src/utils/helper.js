// utils/helpers.js
export const getAverageRating = (reviews = []) => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((sum, { rating }) => sum + rating, 0);
  return +(total / reviews.length).toFixed(1); // round to 1 decimal
};