import React from "react";

import {Link, useLocation } from "react-router-dom";
import './MovieDitails.css';



export const MovieDitails = () => {

  const location = useLocation();
    const movie = location.state;   

  if (!movie) {
    return <div>Нет фильма</div>;
  }

  return (
    
    <div className="movie_card_wrapper">
       <div className="movie_card">
      <img src={movie.Poster} alt={movie.Title} className="movie_card_img active" />
      <h2 className="movie_card_name">{movie.Title}</h2>
      <p className="movie_card_year">{movie.Year}</p>
      <Link to={`/buy-ticket`} state={movie}>
      <button className="buyticket" >Купить билет</button>
      </Link>
    </div>
    </div>

   

  );
};
