import './Location.css';
import React from 'react';

export const Location =({movies, YearChange, selectedYear,TitleChange, selectedTitle} )=>{

      const uniqueYears = movies ? [...new Set(movies.map(movie => movie.Year))] : [];

      const uniqueTitles = movies ? [...new Set(movies.map(movie => movie.Title))] : [];



   return( 
   <div className='location'> 
   <img src="./Ava.png" alt="" className='avatar'/>
        <div className='location_img'><img src="./file:///C:/Users/7272~1/AppData/Local/Temp/Rar$DIa16192.16473/Ellipse%201.svg" alt="" /></div>
        <select name="location_sel" id="" onChange={YearChange} value={selectedYear}>
        <option value="">Выберите год</option>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>


      <select name="location_sel" id="" onChange={TitleChange} value={selectedTitle}>
        <option value="">Выберите название</option>
        {uniqueTitles.map((title, index) => (
          <option key={index} value={title}>{title}</option>
        ))}
      </select>




        <img src="./notif.png" alt="" className='loco_notif'/>
        </div>);
};

