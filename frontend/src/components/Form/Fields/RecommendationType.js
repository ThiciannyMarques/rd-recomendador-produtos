import React from 'react';

const Radio = ({ label, value, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      className="sr-only"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <div
      className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
      style={{
        borderColor: checked ? '#0000EE' : '#F1F3F5',
        backgroundColor: '#FFF',
      }}
    >
      {checked && <div className="w-2.5 h-2.5 rounded-full bg-[#0000EE]" />}
    </div>
    <span
      className={`text-sm ${checked ? 'text-[#212429]' : 'text-[#636E7C]'}`}
    >
      {label}
    </span>
  </label>
);

function RecommendationType({
  selectedRecommendationType,
  onRecommendationTypeChange,
}) {
  return (
    <div className="mb-4">
      <h3 className="text-[#003D5C] font-semibold">Tipo de Recomendação:</h3>
      <div className="space-y-3 mt-2">
        <Radio
          label="Produto Único"
          value="SingleProduct"
          checked={selectedRecommendationType === 'SingleProduct'}
          onChange={() => onRecommendationTypeChange('SingleProduct')}
        />
        <Radio
          label="Múltiplos Produtos"
          value="MultipleProducts"
          checked={selectedRecommendationType === 'MultipleProducts'}
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
        />
      </div>
    </div>
  );
}

export default RecommendationType;
