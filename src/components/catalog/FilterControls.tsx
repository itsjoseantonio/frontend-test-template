interface FilterControlsProps {
  label: string;
  id: string;
  name: string;
  options: string[];
  handleChange: (value: string) => void;
}

const FilterControls = ({
  label,
  id,
  name,
  options,
  handleChange,
}: FilterControlsProps) => {
  return (
    <div className="flex items-center gap-5">
      <span className="font-bold border-r-1 text-lg/5 pr-4">{label}</span>
      <select
        name={name}
        id={id}
        className="w-[200px] block p-1 border border-gray-200 rounded-md  focus:outline-none"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange(e.target.value)
        }
      >
        <option value="">All</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterControls;
