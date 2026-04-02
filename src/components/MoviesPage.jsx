import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviesPageStyles } from '../assets/dummyStyles';
import MOVIES from './dummydata'; // adjust path if needed

const MoviesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const movies = MOVIES;

  // ✅ FILTER (category + search)
  const filteredMovies = movies.filter(movie => {
    const matchesCategory =
      activeCategory === 'all' || movie.category === activeCategory;

    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const COLLAPSE_COUNT = 12;

  // ✅ reset show more
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory, searchTerm]);

  const visibleMovies = showAll
    ? filteredMovies
    : filteredMovies.slice(0, COLLAPSE_COUNT);

  const categories = [
    { id: 'all', name: 'All Movies' },
    { id: 'action', name: 'Action' },
    { id: 'horror', name: 'Horror' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'adventure', name: 'Adventure' }
  ];

  return (
    <div className={moviesPageStyles.container}>
      
      {/* CATEGORY SECTION */}
      <section className={moviesPageStyles.categoriesSection}>
        <div className={moviesPageStyles.categoriesContainer}>
          <div className={moviesPageStyles.categoriesFlex}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${moviesPageStyles.categoryButton.base} ${
                  activeCategory === category.id
                    ? moviesPageStyles.categoryButton.active
                    : moviesPageStyles.categoryButton.inactive
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MOVIES SECTION */}
      <section className={moviesPageStyles.moviesSection}>
        <div className={moviesPageStyles.moviesContainer}>

          {/* ✅ NEW STYLED SEARCH BAR */}
          <div className={moviesPageStyles.searchContainer}>
            <div className={moviesPageStyles.searchWrapper}>
              
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={moviesPageStyles.searchInput}
              />

              <span className={moviesPageStyles.searchIcon}>🔍</span>

              {searchTerm && (
                <span
                  onClick={() => setSearchTerm('')}
                  className={moviesPageStyles.searchClear}
                >
                  ✕
                </span>
              )}

            </div>
          </div>

          {/* MOVIES GRID */}
          <div className={moviesPageStyles.moviesGrid}>
            {visibleMovies.map(movie => (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                state={{ movie }}
                aria-label={`Open details for ${movie.title}`}
                className={moviesPageStyles.movieCard}
              >
                <div className={moviesPageStyles.movieImageContainer}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className={moviesPageStyles.movieImage}
                  />
                </div>

                <div className={moviesPageStyles.movieInfo}>
                  <h3 className={moviesPageStyles.movieTitle}>
                    {movie.title}
                  </h3>
                  <div className={moviesPageStyles.movieCategory}>
                    <span className={moviesPageStyles.movieCategoryText}>
                      {movie.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* EMPTY STATE */}
            {filteredMovies.length === 0 && (
              <div className={moviesPageStyles.emptyState}>
                No movies found.
              </div>
            )}
          </div>

          {/* SHOW MORE / LESS */}
          {filteredMovies.length > COLLAPSE_COUNT && (
            <div className={moviesPageStyles.showMoreContainer}>
              <button
                onClick={() => setShowAll(prev => !prev)}
                className={moviesPageStyles.showMoreButton}
                aria-expanded={showAll}
              >
                {showAll
                  ? 'Show less'
                  : `Show more (${filteredMovies.length - COLLAPSE_COUNT} more)`}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;