import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { MovieCard } from './MovieCard';

export function Content() {
  const { movies, selectedGenre } = useContext(AppContext)

  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie: any) => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
