import React, { useEffect, useState } from 'react';

import { fetchMoviesByCategory, fetchTvByCategory, fetchMoviesByLanguage, IMAGE_BASE_URL } from '../../api';

import MovieModal from '../MovieModal/MovieModal';

import './TitleCards.css';



const TitleCards = ({ title, category, mediaType = 'movie', language }) => {

  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);



  useEffect(() => {

    const getData = async () => {

      try {

        let data;

        if (language) {

          data = await fetchMoviesByLanguage(language);

        } else if (mediaType === 'tv') {

          data = await fetchTvByCategory(category);

        } else {

          data = await fetchMoviesByCategory(category);

        }

        setMovies(data);

      } catch (error) {

        console.error('Error fetching movies:', error);

      }

    };

    getData();

  }, [category, mediaType, language]);



  return (

    <>

      <div className="titlecards">

        <h2>{title}</h2>

        <div className="card-list">

          {movies.map((movie) => (

            <div key={movie.id} className="card" onClick={() => setSelectedMovie(movie)}>

              <img

                src={

                  movie.poster_path

                    ? `${IMAGE_BASE_URL}${movie.poster_path}`

                    : movie.backdrop_path

                    ? `${IMAGE_BASE_URL}${movie.backdrop_path}`

                    : 'https://via.placeholder.com/240x135?text=No+Image'

                }

                alt={movie.title}

              />

              <p>{movie.title}</p>

            </div>

          ))}

        </div>

      </div>



      {selectedMovie && (

        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />

      )}

    </>

  );

};



export default TitleCards; 

