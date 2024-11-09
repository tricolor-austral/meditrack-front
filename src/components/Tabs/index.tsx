interface TabsProps {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

export const Tabs = ({ options, selected, onChange }: TabsProps) => {
  return (
    <div className="flex w-full p-1 bg-[#7878801F] rounded-[7px]">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-2 py-1 flex-1 rounded-[7px] ${selected === option.value ? 'bg-white text-black font-light' : 'bg-transparent text-black font-light'}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
