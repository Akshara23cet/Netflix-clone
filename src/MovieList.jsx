// import React, { useEffect, useState } from "react";
// import fetchMovies from "./api";

// function MovieList({ query }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const loadMovies = async () => {
//       const data = await fetchMovies(query);
//       setMovies(data || []);
//     };

//     loadMovies();
//   }, [query]);

//   return (
//     <div>
//       <h2>Movies for: {query}</h2>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {movies.map((movie) => (
//           <div key={movie.id} style={{ margin: "10px" }}>
//             <img
//               src={movie?.i?.imageUrl || "https://via.placeholder.com/150"}
//               alt={movie?.l}
//               style={{ width: "150px", height: "200px", objectFit: "cover" }}
//             />
//             <p>{movie?.l}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MovieList;
