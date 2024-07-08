import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { MovieDitails} from "./pages/MovieDitails.jsx";
import {Seats} from './pages/Seats';
import {Boughtticket} from './pages/Boughtticket';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:imdbID" element={<MovieDitails />} />
        <Route path="/buy-ticket" element={<Seats />} />
        <Route path="/buyticket" element={<Boughtticket />} />
      </Routes>
      
  );
};














