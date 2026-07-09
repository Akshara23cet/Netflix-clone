import React from 'react'

import Home from './pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login'

import Watchlist from './pages/Watchlist/Watchlist'

import TvShows from './pages/TvShows/TvShows'

import NewPopular from './pages/NewPopular/NewPopular'

import BrowseLanguages from './pages/BrowseLanguages/BrowseLanguages'

import { WatchlistProvider } from "./components/context/WatchlistContext";
function App() {

  return (

    <WatchlistProvider>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/watchlist' element={<Watchlist />} />

          <Route path='/tv-shows' element={<TvShows />} />

          <Route path='/new-popular' element={<NewPopular />} />

          <Route path='/browse-languages' element={<BrowseLanguages />} />

        </Routes>

      </BrowserRouter>

    </WatchlistProvider>

  );

}



export default App