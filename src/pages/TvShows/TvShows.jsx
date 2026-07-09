import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import TitleCards from '../../components/TitleCards/TitleCards';

import Footer from '../../components/Footer/Footer';

import '../Home/Home.css';

import './CategoryPage.css';



const TvShows = () => {

  return (

    <div className="home">

      <Navbar />

      <div className="category-page">

        <h1 className="category-heading">TV Shows</h1>

        <div className="more-cards">

          <TitleCards title="Trending TV Shows" category="tv_trending" mediaType="tv" />

          <TitleCards title="Popular on Netflix" category="tv_popular" mediaType="tv" />

          <TitleCards title="Top Rated Series" category="tv_top_rated" mediaType="tv" />

          <TitleCards title="Currently Airing" category="tv_on_air" mediaType="tv" />

          <TitleCards title="Airing Today" category="tv_airing_today" mediaType="tv" />

        </div>

      </div>

      <Footer />

    </div>

  );

};



export default TvShows; 

