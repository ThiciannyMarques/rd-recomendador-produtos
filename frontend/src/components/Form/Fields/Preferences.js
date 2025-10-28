import { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] =
    useState(selectedPreferences);

  const handleChange = (preference) => {
    const updated = currentPreferences.includes(preference)
      ? currentPreferences.filter((p) => p !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updated);
    onPreferenceChange(updated);
  };

  return (
    <div className="mb-4">
      <h3 className="text-[#003D5C] font-semibold">Preferências:</h3>
      <div className="space-y-3 mt-2">
        {preferences.map((pref) => (
          <Checkbox
            key={pref}
            label={pref}
            checked={currentPreferences.includes(pref)}
            onChange={() => handleChange(pref)}
          />
        ))}
      </div>
    </div>
  );
}

export default Preferences;
