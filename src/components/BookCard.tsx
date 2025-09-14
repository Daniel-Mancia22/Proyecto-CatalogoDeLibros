import React from 'react';
import { Book } from '../types';

interface Props {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (b: Book) => void;
}

const BookCard: React.FC<Props> = ({ book, isFavorite, onToggleFavorite }) => (
  <div className="p-4 border rounded-lg shadow bg-white">
    <img
      src = {book.cover}
      alt = {book.title}
      className="w-full h-48 object-cover rounded"/>

    <h3 className="mt-2 text-xl font-medium"> {book.title}</h3>
    <p className="text-gray-600"> {book.author}</p>
    
    <button
      onClick={() => onToggleFavorite(book)}
      className={`mt-4 px-3 py-1 rounded-lg border text-white transition ${
        isFavorite
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-blue-400 hover:bg-blue-500'
      }`}
    >
      {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
    </button>
  </div>
);

export default BookCard;