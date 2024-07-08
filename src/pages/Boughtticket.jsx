import React from 'react';
import { useLocation } from 'react-router-dom';
import './Boughtticket.css'


export const Boughtticket = () => {
    const location = useLocation();
  
    const { movie, selectedSeat, selectedDate } = location.state || {};

  if (!movie) {
    return <div>Нет свободных мест</div>;
  }

  const seatDataStyle = {
    backgroundImage: `url(${movie.Poster})`, 
    backgroundSize: "cover", 
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "100px",
    
  };

  
  return (
    <div className='Boughtticket' >
      <h1 className='Title'>Билет куплен для фильма {movie.Title}</h1>
      <div className='Texts'>
      <p className='Text'>Год: {movie.Year}</p>
      <p className='Text'>Ваше место: {selectedSeat}</p>
      <p className='Text'>Ваша дата: {selectedDate}</p>
      </div>
      <div className="movie_footer" style={seatDataStyle}></div>
    </div>
  );
};