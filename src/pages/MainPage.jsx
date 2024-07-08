import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import {Header} from '../components/Header';
import {Adv} from '../components/Adv';
import { MovieCard } from '../components/MovieCard';
import { VoucherCard } from '../components/VoucherCard';
import { Location } from '../components/Location';

import '../App.css';
import './MainPage.css';



export const MainPage = () => {

  const arrAdv = [ 
    {
      id: 0,
      img: "https://static.vecteezy.com/system/resources/previews/006/920/520/non_2x/customers-getting-loyalty-card-discount-card-voucher-coupon-earn-points-gift-certificate-for-promotion-strategy-illustration-template-for-sale-loyalty-program-bonus-promotion-concept-free-vector.jpg",
      advtext1: "Смотреть где угодно",
      advtext2: "в любой момент.",
      advtext3: "Начните сейчас",
      advtext4: "2000 ₸",
      days: "30 дней",
      style: "lightviolet",
    },
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/previews/006/920/525/non_2x/customers-getting-loyalty-card-discount-card-voucher-coupon-earn-points-gift-certificate-for-promotion-strategy-illustration-template-for-sale-loyalty-program-bonus-promotion-concept-free-vector.jpg",
      advtext1: "Смотреть где угодно",
      advtext2: "в любой момент.",
      advtext3: "Начните сейчас",
      advtext4: "8000 ₸",
      days: "90 дней",
      style: "lightviolet",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-vector/discount-loyalty-card-program-customer-service_106788-2301.jpg",
      advtext1: "Смотреть где угодно",
      advtext2: "в любой момент.",
      advtext3: "Начните сейчас",
      advtext4: "10000 ₸",
      days: "150 дней",
      style: "darkviolet",
    },
   ];

   const [advs, setAdv] = useState(arrAdv);

   
  const arrVoucher = [
    {
      id: 0,
      img: "https://static.vecteezy.com/system/resources/previews/007/494/762/original/customers-getting-gift-card-gift-voucher-discount-coupon-earn-points-gift-certificate-for-promotion-strategy-3d-illustration-template-for-sale-loyalty-program-bonus-promotion-concept-free-vector.jpg",
      voutext1: "Платное использование",
      voutext2: "Дебет BCA",
      voutext3: "Экономичный",
      discount: "30%",
      style: "lightviolet",
    },
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/previews/006/920/519/non_2x/customers-getting-gift-card-gift-voucher-discount-coupon-earn-points-gift-certificate-for-promotion-strategy-3d-illustration-template-for-sale-loyalty-program-bonus-promotion-concept-free-vector.jpg",
      voutext1: "Платное использование",
      voutext2: "Дебет BCA",
      voutext3: "Суперэкономичный",
      discount: "50%",
      style: "darkviolet"
    },
  ];
  const [vouchers, setVouchers] = useState(arrVoucher);
 

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedYear, setSelectedYear] = useState(""); 
  const [availableYears, setAvailableYears] = useState([]);

  const [selectedTitle, setSelectedTitle] = useState(""); 
  const [availableTitles, setAvailableTitles] = useState([]);



  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/?s=marvel&apikey=19ec95fc');
        if (response.data.Response === "True") {
          setMovies(response.data.Search);

          const years = response.data.Search.map(movie => movie.Year).filter((value, index, self) => self.indexOf(value) === index);
          setAvailableYears(years);

          const titles = response.data.Search.map(movie => movie.Title).filter((value, index, self) => self.indexOf(value) === index);
          setAvailableTitles(titles);




        } else {
          setError(response.data.Error);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);



  const YearChange = (e) => {
    setSelectedYear(e.target.value); 
  };

  const TitleChange = (e) => {
    setSelectedTitle(e.target.value); 
  };



  const filteredMovies = movies
  .filter(movie => (selectedYear ? movie.Year === selectedYear : true))
  .filter(movie => (selectedTitle ? movie.Title === selectedTitle : true));;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return <div>
      <Header/>
      <div className='Location_wrapper'>
      <Location YearChange={YearChange} TitleChange={TitleChange} movies={movies}/>
      </div>


      <div className='Adv_wrapper'>
      <div className='Adv_title'>
        <h1>Объявления</h1>
      </div>
      <div className="Advs">
      {advs.map(item => <Adv key={item.id} dataadv={item} />)}
      </div>
      </div>
      


    <div className='Movie_cards'>
      <div className='Movie_cards_title'>
        <h1>Сейчас показывают</h1>
    
      
      </div>


      <div className="movie_list">
      {filteredMovies.length > 0 ? (
      filteredMovies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))
    ) : (
      <MovieCard noMovies />
    )}
        </div>


    </div>


      <div className='voucher_wrapper'>
      <div className='voucher_title'>
        <h1>Ваучерные предложения</h1>
      </div>
      <div className="vouchers">
      {vouchers.map(item => <VoucherCard key={item.id} datavou={item} />)}
      </div>
      
    </div>
   

    
    </div>;


};