import React, { useState, useEffect, useMemo } from 'react';
import { Work, Book } from './types';
import { useFetchData } from './hooks/useFetchData';
import { useNotification } from './hooks/useNotification';
import FilterPanel from './components/FilterPanel';
import BookCard from './components/BookCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const COMPANY_NAME = 'DevMadCode - Tu Biblioteca Digital';
const AUTHOR = 'DANIEL MANCIA';
const STUDENT = 'DevMadCode';
const DATE = new Date().toLocaleDateString();
const GENRES = ['Romance', 'Ciencia Ficción', 'Fantasía', 'Misterio'];

const App: React.FC = () => {
  //Hacemos el llamado de la API
  const { data, loading, error } = useFetchData<{ works: Work[] }>(
    'https://openlibrary.org/subjects/romance.json?limit=20'
  );
  
  const [favorites, setFavorites] = useState<Book[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const notify = useNotification();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (book: Book) => {
    const isFav = favorites.some((b) => b.id === book.id);
    const updated = isFav
      ? favorites.filter((b) => b.id !== book.id)
      : [...favorites, book];
    setFavorites(updated);
    notify(isFav ? 'Libro eliminado de favoritos' : 'Libro agregado a favoritos');
  };

  const handleToggleFilter = (genre: string) =>
    setActiveFilters((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );

  const filteredWorks: Work[] = useMemo(() => {
    if (!data?.works) return [];
    if (activeFilters.length === 0) return data.works;
    return data.works.filter((work) =>
      Array.isArray(work.subject) && work.subject.some((s) => activeFilters.includes(s))
    );
  }, [data?.works, activeFilters]);

  const filteredBooks: Book[] = filteredWorks.map((work) => ({
    id: work.key,
    title: work.title,
    author: work.authors?.[0]?.name ?? '—',
    cover: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
    subject: Array.isArray(work.subject) ? work.subject[0] : '',
    publishYear: work.first_publish_year,
  }));

  if (loading) return <p className="text-center mt-8">Cargando...</p>;
  if (error) return <p className="text-center mt-8">Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-black text-white p-4 text-center">
        <h1 className="text-3xl font-medium">{COMPANY_NAME}</h1>
      </header>
  
      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        <FilterPanel
          genres={GENRES}
          activeFilters={activeFilters}
          onToggleFilter={handleToggleFilter}
        />
  
        {/* Sección de favoritos */}
        {favorites.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">Mis Favoritos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favorites.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
  
        {/* Sección de todos libros */}
        <h2 className="text-2xl font-medium text-black mb-4">Todos los libros</h2>

        {filteredBooks.filter((book) => !favorites.some((f) => f.id === book.id)).length === 0 ? (
        <p className="text-center text-gray-600">No se encontraron libros para los géneros seleccionados.</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks
            .filter((book) => !favorites.some((f) => f.id === book.id))
            .map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isFavorite={false}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
        </div>
        )}
      </main>
  
      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center font-medium">
        <p>{AUTHOR} | CONOCIDO COMO: {STUDENT} | Fecha: {DATE}</p>
      </footer>
  
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;