import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import TitleCards from '../../components/TitleCards/TitleCards';

import Footer from '../../components/Footer/Footer';

import '../Home/Home.css';

import '../TvShows/CategoryPage.css';



const LANGUAGES = [

  { code: 'en', label: 'English' },

  { code: 'hi', label: 'Hindi' },

  { code: 'ta', label: 'Tamil' },

  { code: 'te', label: 'Telugu' },

  { code: 'ko', label: 'Korean' },

  { code: 'ja', label: 'Japanese' },

  { code: 'es', label: 'Spanish' },

  { code: 'fr', label: 'French' },

];



const BrowseLanguages = () => {

  const [selected, setSelected] = useState('all');



  const visible = selected === 'all' ? LANGUAGES : LANGUAGES.filter((l) => l.code === selected);



  return (

    <div className="home">

      <Navbar />

      <div className="category-page">

        <div className="category-header">

          <h1 className="category-heading">Browse by Languages</h1>

          <select

            className="language-select"

            value={selected}

            onChange={(e) => setSelected(e.target.value)}

          >

            <option value="all">All Languages</option>

            {LANGUAGES.map((l) => (

              <option key={l.code} value={l.code}>{l.label}</option>

            ))}

          </select>

        </div>

        <div className="more-cards">

          {visible.map((l) => (

            <TitleCards key={l.code} title={`${l.label} Movies`} language={l.code} />

          ))}

        </div>

      </div>

      <Footer />

    </div>

  );

};



export default BrowseLanguages; 

