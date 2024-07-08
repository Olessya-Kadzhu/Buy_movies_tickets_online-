import './MovieCard.css'
import React from 'react';
import {Link } from 'react-router-dom';


export const MovieCard = ({ movie, noMovies}) => {
  if (noMovies) {
    return <div className='movie_card_name1'>Фильмов с таким годом и названием нет</div>;
  }

    return (
      <Link to={`/${movie.imdbID}`} state={movie} className="movie_card_link">
      <div className="movie_card">
       
        <img src={movie.Poster} alt={movie.Title} className="movie_card_img active" />
       
        <h2 className="movie_card_name">{movie.Title}</h2>
        <p className="movie_card_year">{movie.Year}</p>
      </div>
       </Link>
    );
  };