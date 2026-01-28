import CardsData2 from '../../assets/cards/Cards_data2'
import CardsData from '../../assets/cards/Cards_data'
import CardsData3 from '../../assets/cards/card_data3'
import "./DummyCards.css" 

import React from 'react';
import './DummyCards.css'; 
function DummyCards({ title, data }) {
  return (
    <>
  <div className="movie-row">
  <h2 className="row-title">Recently Added</h2>
  <div className="movie-row-cards">
    {CardsData2.map((item, idx) => (
      <div className="movie-card hover-card" key={idx}>
        <img src={item.image} alt={item.name} />
        <div className="card-hover-info">
          <h4>{item.name}</h4>
          <p>Some dummy description for this movie...</p>
        </div>
      </div>
    ))}
  </div>
</div>



 <div className="movie-row">
  <h2 className="row-title">Most Popular</h2>
  <div className="movie-row-cards">
    {CardsData.map((item, idx) => (
      <div className="movie-card hover-card" key={idx}>
        <img src={item.image} alt={item.name} />
        <div className="card-hover-info">
          <h4>{item.name}</h4>
          <p>Some dummy description for this movie...</p>
        </div>
      </div>
    ))}
  </div>
</div>


 <div className="movie-row">
  <h2 className="row-title">Watch Again</h2>
  <div className="movie-row-cards">
    {CardsData3.map((item, idx) => (
      <div className="movie-card hover-card" key={idx}>
        <img src={item.image} alt={item.name} />
        <div className="card-hover-info">
          <h4>{item.name}</h4>
          <p>Some dummy description for this movie...</p>
        </div>
      </div>
    ))}
  </div>
</div>

</>
  );
}

export default DummyCards;



// const DummyCards = () =>{

//     return(
//         <>
//     <div className="movie-row">
//     <h2 className="row-title">Recently Added</h2>

//   <div className="movie-row-cards">
//     {CardsData2.map((i, idx) => (
//       <div className="movie-card" key={idx}>
//         <img src={i.image} alt={i.name}/>
//       </div>
//     ))}
//   </div>
// </div>


// <div className="movie-row">
//   <h2 className="row-title">Most Popular</h2>
//   <div className="movie-row-cards">
//     {CardsData.map((i, idx) => (
//       <div className="movie-card" key={idx}>
//         <img src={i.image} alt={i.name} />
//       </div>
//     ))}
//   </div>
// </div>


// <div className="movie-row">
//   <h2 className="row-title">Watch Again</h2>
//   <div className="movie-row-cards">
//     {CardsData3.map((i, idx) => (
//       <div className="movie-card" key={idx}>
//         <img src={i.image} alt={i.name} />
//       </div>
//     ))}
//   </div>
// </div>
// </>
//     )
// }


