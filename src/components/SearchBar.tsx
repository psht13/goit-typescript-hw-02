import { FormEvent } from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const input: HTMLInputElement = e.currentTarget.search;
    const query: string = input.value.trim().toLowerCase();

    setSearchQuery(query);
  };

  return (
    <header className="flex items-center justify-center h-16 bg-blue-800">
      <form
        className="flex gap-4"
        onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
          className="rounded-xl h-10 px-4 outline-none"
        />
        <button
          type="submit"
          className="rounded-xl h-10 px-4 bg-white text-blue-800 outline-none">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
