/**
 * Returns recommended products based on user preferences and features
 * @param {Object} formData 
 * @param {Array} formData.selectedPreferences
 * @param {Array} formData.selectedFeatures
 * @param {string} formData.selectedRecommendationType
 * @param {Array} products
 * @returns {Array}
 */
const getRecommendations = (formData = {}, products = []) => {
  if (!Array.isArray(products)) {
    console.error('Invalid products data');
    return [];
  }

  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData;

  if (!products.length || !selectedRecommendationType) return [];

  const scoredProducts = products.map((product, originalIndex) => {
    const preferenceMatches = product.preferences?.filter(pref =>
      selectedPreferences.includes(pref)
    ).length || 0;

    const featureMatches = product.features?.filter(feat =>
      selectedFeatures.includes(feat)
    ).length || 0;

    const totalScore = preferenceMatches + featureMatches;

    return {
      ...product,
      score: totalScore,
      originalIndex,
    };
  });

  const relevantProducts = scoredProducts
    .filter(product => product.score > 0)
    .sort((a, b) => {
      return b.score - a.score || a.originalIndex - b.originalIndex;
    });

  return selectedRecommendationType === 'SingleProduct'
    ? relevantProducts.slice(0, 1)
    : relevantProducts;
};

export default { getRecommendations };