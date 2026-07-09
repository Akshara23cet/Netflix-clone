import React, { useState } from 'react';

import { useWatchlist } from "../../components/context/WatchlistContext";
import { IMAGE_BASE_URL } from '../../api';

import Navbar from '../../components/Navbar/Navbar';

import MovieModal from "../../components/MovieModal/MovieModal";
import Footer from '../../components/Footer/Footer';

import './Watchlist.css';



const Watchlist = () => {

  const { watchlist } = useWatchlist();

  const [selectedMovie, setSelectedMovie] = useState(null);



  return (

    <div className="watchlist-page">

      <Navbar />

      <div className="watchlist-content">

        <h1>My List</h1>

        {watchlist.length === 0 ? (

          <p className="empty-msg">You haven't added anything to your list yet.</p>

        ) : (

          <div className="watchlist-grid">

            {watchlist.map((movie) => (

              <div key={movie.id} className="watchlist-card" onClick={() => setSelectedMovie(movie)}>

                <img

                  src={

                    movie.poster_path

                      ? `${IMAGE_BASE_URL}${movie.poster_path}`

                      : 'https://via.placeholder.com/200x300?text=No+Image'

                  }

                  alt={movie.title}

                />

                <p>{movie.title}</p>

              </div>

            ))}

          </div>

        )}

      </div>

      <Footer />

      {selectedMovie && (

        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />

      )}

    </div>

  );

};



export default Watchlist; 

