import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from './Context'; // Import GlobalContext for user info
import TourRepository from './repo/TourRepository'; // Import the repository
import './AddTour.css';
import ReservationRepository from "./repo/ReservationRepository"; // Reuse the existing form styles

const ReservationForm = () => {
    const { user } = useContext(GlobalContext); // Get user from context
    const loc = useLocation();
    const nav = useNavigate();
    const { tourId } = loc.state || {}; // Get the tourId from the state passed through the link

    const [reservationDate, setReservationDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = user.id; // Get the user ID from the context

        try {
            // Call the createReservation function from the repository
            await ReservationRepository.createReservation(userId, tourId, reservationDate);
            alert('Reservation successfully created!');
            nav("/tourdetails", { state: { tourId: tourId } });
        } catch (error) {
            console.error('Error creating reservation:', error);
        }
    };

    return (
        <form className="tourform" onSubmit={handleSubmit}>
            <h2>Make a Reservation</h2>
            <input
                type="date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                placeholder="Reservation Date"
                required
            />
            <button type="submit">Reserve Tour</button>
        </form>
    );
};

export default ReservationForm;
