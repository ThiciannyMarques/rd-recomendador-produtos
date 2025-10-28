import { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  const handleChange = (feature) => {
    const updated = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updated);
    onFeatureChange(updated);
  };

  return (
    <div className="mb-4">
      <h3 className="text-[#003D5C] font-semibold">Funcionalidades:</h3>
      <div className="space-y-3 mt-2">
        {features.map((feature) => (
          <Checkbox
            key={feature}
            label={feature}
            checked={currentFeatures.includes(feature)}
            onChange={() => handleChange(feature)}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
