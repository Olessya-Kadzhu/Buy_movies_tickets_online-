import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Seats.css';

const seats = [
    ...Array.from({ length: 10 }, (v, i) => ({ id: i + 1, color: 'pink', price: 1500 })),
    ...Array.from({ length: 10 }, (v, i) => ({ id: i + 11, color: 'blue', price: 2000 })),
    ...Array.from({ length: 10 }, (v, i) => ({ id: i + 21, color: 'yellow', price: 3500 })),
];

const dates = [
    "20/03/2025",
    "21/03/2025",
    "22/03/2025",
    "23/03/2025",
    "24/03/2025"
];

export const Seats = () => {
    const location = useLocation();
    const movie = location.state; 

    const [selectedDate, setSelectedDate] = useState(() => {
        const savedDate = localStorage.getItem('selectedDate');
        return savedDate ? JSON.parse(savedDate) : null;
    });

    const [selectedSeat, setSelectedSeat] = useState(() => {
        const savedSeat = localStorage.getItem('selectedSeat');
        return savedSeat ? JSON.parse(savedSeat) : null;
    });

    const [bookedSeats, setBookedSeats] = useState(() => {
        const savedBookedSeats = localStorage.getItem('bookedSeats');
        return savedBookedSeats ? JSON.parse(savedBookedSeats) : [];
    });

    const [bookedDates, setBookedDates] = useState(() => {
        const savedBookedDates = localStorage.getItem('bookedDates');
        return savedBookedDates ? JSON.parse(savedBookedDates) : [];
    });

    useEffect(() => {
        if (selectedSeat) {
            setBookedSeats(prev => {
                const updatedSeats = [...prev, selectedSeat];
                localStorage.setItem('bookedSeats', JSON.stringify(updatedSeats));
                return updatedSeats;
            });
        }
    }, [selectedSeat]);

    useEffect(() => {
        if (selectedDate) {
            setBookedDates(prev => {
                const updatedDates = [...prev, selectedDate];
                localStorage.setItem('bookedDates', JSON.stringify(updatedDates));
                return updatedDates;
            });
        }
    }, [selectedDate]);

    const handleSeatSelection = (seatId) => {
        if (!bookedSeats.includes(seatId)) {
            setSelectedSeat(seatId);
        }
    };

    const handleDateSelection = (date) => {
        if (!bookedDates.includes(date)) {
            setSelectedDate(date);
        }
    };

    return (
        <div className="SeatsandData">
            <img src={movie.Poster} alt={movie.Title} className="movie_card_img active" />
            <div className="Setseat">
                <div className="Setseat_title">Выберите место:</div>
                <div className="Seats">
                    <div className="SeatGroup1">
                        <div className="SeatGroupTitle1">
                            <h3>Первый ряд (1500 тг)</h3>
                        </div>
                        <div className="SeatGroupSeats1">
                            {seats
                                .filter(seat => seat.color === 'pink')
                                .map(seat => (
                                    <div
                                        key={seat.id}
                                        className={`seat ${seat.color} ${selectedSeat === seat.id ? 'selected' : ''} ${bookedSeats.includes(seat.id) ? 'booked' : ''}`}
                                        onClick={() => handleSeatSelection(seat.id)}
                                    >
                                        {seat.id}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="SeatGroup2">
                        <h3>Второй ряд (2000 тг)</h3>
                        <div className="SeatGroupSeats2">
                            {seats
                                .filter(seat => seat.color === 'blue')
                                .map(seat => (
                                    <div
                                        key={seat.id}
                                        className={`seat ${seat.color} ${selectedSeat === seat.id ? 'selected' : ''} ${bookedSeats.includes(seat.id) ? 'booked' : ''}`}
                                        onClick={() => handleSeatSelection(seat.id)}
                                    >
                                        {seat.id}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="SeatGroup3">
                        <div className="SeatGroupTitle3">
                            <h3>Третий ряд (3500 тг)</h3>
                        </div>
                        <div className="SeatGroupSeats3">
                            {seats
                                .filter(seat => seat.color === 'yellow')
                                .map(seat => (
                                    <div
                                        key={seat.id}
                                        className={`seat ${seat.color} ${selectedSeat === seat.id ? 'selected' : ''} ${bookedSeats.includes(seat.id) ? 'booked' : ''}`}
                                        onClick={() => handleSeatSelection(seat.id)}
                                    >
                                        {seat.id}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="Setdata">
                <div className="Setdata_title">Выберите дату:</div>
                <div className="Datas">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            className={`Setdata_number ${selectedDate === date ? 'selected' : ''} ${bookedDates.includes(date) ? 'booked' : ''}`}
                            onClick={() => handleDateSelection(date)}
                        >
                            {date}
                        </button>
                    ))}
                </div>
            </div>
            
            <Link to={`/buyticket`} state={{ movie, selectedDate, selectedSeat }}>
                <button className="buyticket">Купить билет</button>
            </Link>
        </div>
    );
};