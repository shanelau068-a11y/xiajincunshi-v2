export function FilterBar({
  options,
  value,
  onChange,
  label = '分类',
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}) {
  return (
    <div className="filter-bar" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={`filter-btn ${value === option ? 'filter-btn-active' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
