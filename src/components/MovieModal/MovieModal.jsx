import React from 'react';

import { useWatchlist } from "../context/WatchlistContext";
import { IMAGE_BASE_URL } from '../../api';

import './MovieModal.css';



const MovieModal = ({ movie, onClose }) => {

  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();



  if (!movie) return null;



  const inWatchlist = isInWatchlist(movie.id);



  const handleBackdropClick = (e) => {

    if (e.target.classList.contains('modal-overlay')) onClose();

  };



  return (

    <div className="modal-overlay" onClick={handleBackdropClick}>

      <div className="modal-content">

        <button className="modal-close" onClick={onClose}>✕</button>



        <div className="modal-banner">

          <img

            src={

              movie.backdrop_path

                ? `${IMAGE_BASE_URL}${movie.backdrop_path}`

                : movie.poster_path

                ? `${IMAGE_BASE_URL}${movie.poster_path}`

                : 'https://via.placeholder.com/800x400?text=No+Image'

            }

            alt={movie.title}

          />

          <div className="modal-banner-overlay">

            <h2>{movie.title}</h2>

          </div>

        </div>



        <div className="modal-body">

          <div className="modal-meta">

            <span className="modal-rating">⭐ {movie.vote_average?.toFixed(1)}</span>

            <span className="modal-year">{movie.release_date?.split('-')[0]}</span>

            {movie.adult ? <span className="modal-badge">18+</span> : <span className="modal-badge">PG</span>}

          </div>



          <p className="modal-overview">{movie.overview || 'No description available.'}</p>



          <button

            className={`watchlist-btn ${inWatchlist ? 'remove' : 'add'}`}

            onClick={() => inWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)}

          >

            {inWatchlist ? '✓ Remove from My List' : '+ Add to My List'}

          </button>

        </div>

      </div>

    </div>

  );

};



export default MovieModal;