import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import TitleCards from '../../components/TitleCards/TitleCards';

import Footer from '../../components/Footer/Footer';

import '../Home/Home.css';

import '../TvShows/CategoryPage.css';



const NewPopular = () => {

  return (

    <div className="home">

      <Navbar />

      <div className="category-page">

        <h1 className="category-heading">New &amp; Popular</h1>

        <div className="more-cards">

          <TitleCards title="Now Playing" category="now_playing" />

          <TitleCards title="Coming Soon" category="upcoming" />

          <TitleCards title="Popular Movies" category="popular" />

          <TitleCards title="Trending This Week" category="trending" />

          <TitleCards title="Trending TV Shows" category="tv_trending" mediaType="tv" />

        </div>

      </div>

      <Footer />

    </div>

  );

};



export default NewPopular; 

