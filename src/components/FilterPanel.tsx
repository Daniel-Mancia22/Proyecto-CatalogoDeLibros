import React from 'react';

interface Props {
  genres: string[];
  activeFilters: string[];
  onToggleFilter: (genre: string) => void;
}

const FilterPanel: React.FC<Props> = ({ genres, activeFilters, onToggleFilter }) => (
  <div className="mb-4 text-center">
    {genres.map((g) => (
      <button
        key={g}
        onClick={() => onToggleFilter(g)}
        className={`mr-2 mb-2 px-3 py-1 rounded-full border ${
          activeFilters.includes(g) ? 'bg-red-600 text-white' : 'bg-white text-black'
        }`}
      >
        {g}
      </button>
    ))}
  </div>
);

export default FilterPanel;