function calculateMedianRating(reviews: any[]) {
  // Extract the ratings from the reviews array
  const ratings = reviews.map((review) => review.rating);

  // Sort the ratings in ascending order
  ratings.sort((a, b) => a - b);

  // Calculate the median
  const mid = Math.floor(ratings.length / 2);

  if (ratings.length % 2 === 0) {
    // If even, average the two middle numbers
    return (ratings[mid - 1] + ratings[mid]) / 2;
  } else {
    // If odd, return the middle number
    return ratings[mid];
  }
}

export { calculateMedianRating };
