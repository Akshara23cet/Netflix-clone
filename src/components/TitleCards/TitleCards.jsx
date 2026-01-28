// // src/components/TitleCards/TitleCards.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchMovies } from '../../api';
// import './TitleCards.css';

// const TitleCards = ({ title, category }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const movieData = await fetchMovies(category);
//         console.log('Fetched data for category:', category, movieData);
//         console.log("Movie Object:", movie);

//         setMovies([{
//            id: "tt1234567",
//     image: { url: "https://via.placeholder.com/150" },
//     l: "Sample Movie"
//         }

//         ]);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     getData();
//   }, [category]);

//   return (
//     <div className="title-card-container">
//       <h2>{title}</h2>
//       <div className="card-list">
//         {movies.map((movie) => (
//           <div key={movie.id} className="card">
//             <img src={movie.image.url} alt={movie.l} />
//             <p>{movie.l}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
