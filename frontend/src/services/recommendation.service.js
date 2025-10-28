const VALID_RECOMMENDATION_TYPES = ['SingleProduct', 'MultipleProducts'];

const validateInputs = (products, recommendationType) => {
  if (!Array.isArray(products)) throw new Error('Products deve ser um array');
  if (typeof recommendationType !== 'string')
    throw new Error('Tipo de recomendação inválido');
  if (!VALID_RECOMMENDATION_TYPES.includes(recommendationType))
    throw new Error('Tipo de recomendação inválido');
};

const scoreProduct = (product, preferenceSet, featureSet, index) => ({
  ...product,
  score:
    (product.preferences?.filter((p) => preferenceSet.has(p)).length || 0) +
    (product.features?.filter((f) => featureSet.has(f)).length || 0),
  originalIndex: index,
});

const sortByScore = (type) => (a, b) => {
  if (b.score !== a.score) return b.score - a.score;
  return type === 'SingleProduct'
    ? b.originalIndex - a.originalIndex
    : a.originalIndex - b.originalIndex;
};

const getRecommendations = (
  {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = {},
  products = []
) => {
  if (!products.length || !selectedRecommendationType) return [];

  try {
    validateInputs(products, selectedRecommendationType);

    const preferenceSet = new Set(selectedPreferences);
    const featureSet = new Set(selectedFeatures);

    const scored = products
      .map((p, i) => scoreProduct(p, preferenceSet, featureSet, i))
      .filter((p) => p.score > 0)
      .sort(sortByScore(selectedRecommendationType));

    return selectedRecommendationType === 'SingleProduct'
      ? scored.slice(0, 1)
      : scored;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        '[recommendationService] Erro ao gerar recomendações:',
        error.message
      );
      throw error;
    }

    console.warn('[recommendationService] Erro tratado em produção');
    return [];
  }
};

const recommendationService = { getRecommendations };

export default recommendationService;
