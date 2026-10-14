import { Search } from 'lucide-react';
import { FormEvent, useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchBoxProps = {
  defaultValue?: string;
  large?: boolean;
};

export function SearchBox({ defaultValue = '', large = false }: SearchBoxProps) {
  const [value, setValue] = useState(defaultValue);
  const navigate = useNavigate();
  const id = useId();
  useEffect(() => setValue(defaultValue), [defaultValue]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query = value.trim();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full overflow-hidden rounded-sm border border-brown/20 bg-paper shadow-paper"
    >
      <label className="sr-only" htmlFor={id}>
        搜索村史全文
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="搜索村史、人物、地名、年代..."
        className={`min-w-0 flex-1 bg-transparent px-4 text-brown outline-none placeholder:text-brown/45 ${
          large ? 'h-14 text-lg' : 'h-11 text-base'
        }`}
      />
      <button
        className="flex items-center gap-2 bg-brown px-5 text-paper transition hover:bg-ink"
        type="submit"
      >
        <Search size={18} />
        <span className="hidden sm:inline">搜索</span>
      </button>
    </form>
  );
}
