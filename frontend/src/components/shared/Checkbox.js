const Checkbox = ({
  type = 'checkbox',
  label,
  value,
  checked,
  onChange,
  name,
}) => {
  const isCheckbox = type === 'checkbox';

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      {isCheckbox ? (
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all`}
          style={{
            borderColor: checked ? '#0000EE' : '#F1F3F5',
            backgroundColor: checked ? '#0000EE' : '#FFFFFF',
          }}
        >
          {checked && (
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="#FFF"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      ) : (
        <div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
          style={{
            borderColor: checked ? '#0000EE' : '#F1F3F5',
            backgroundColor: '#FFF',
          }}
        >
          {checked && <div className="w-2.5 h-2.5 rounded-full bg-[#0000EE]" />}
        </div>
      )}

      <span
        className={`text-sm ${checked ? 'text-[#212429]' : 'text-[#636E7C]'}`}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
