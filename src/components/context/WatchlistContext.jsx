import React, { createContext, useContext, useState, useEffect } from 'react';



const WatchlistContext = createContext();



export const WatchlistProvider = ({ children }) => {

  const [watchlist, setWatchlist] = useState(() => {

    const saved = localStorage.getItem('watchlist');

    return saved ? JSON.parse(saved) : [];

  });



  useEffect(() => {

    localStorage.setItem('watchlist', JSON.stringify(watchlist));

  }, [watchlist]);



  const addToWatchlist = (movie) => {

    setWatchlist((prev) => {

      if (prev.find((m) => m.id === movie.id)) return prev;

      return [...prev, movie];

    });

  };



  const removeFromWatchlist = (movieId) => {

    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));

  };



  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);



  return (

    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>

      {children}

    </WatchlistContext.Provider>

  );

};



export const useWatchlist = () => useContext(WatchlistContext); 

