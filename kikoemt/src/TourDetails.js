import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TourRepository from './repo/TourRepository';
import ReservationRepository from './repo/ReservationRepository'; // Assuming you have a repo for reservations
import {
    TourDetailsContainer,
    TourDetailsImage,
    TourDetailsContent,
    TourDetailsName,
    TourDetailsDescription,
    TourDetailsSection,
    TourDetailsDate,
    TourDetailsButtonContainer,
    ReservationMessage
} from './styled-components';
import { GlobalContext } from "./Context";
import styled from 'styled-components'; // Import styled-components

const TourDetails = () => {
    const { user } = useContext(GlobalContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { tourId } = location.state || {};
    const [tour, setTour] = useState(null);
    const [hasReserved, setHasReserved] = useState(false); // State to check if user has reserved the tour

    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const data = await TourRepository.getTourById(tourId);
                console.log('Fetched tour details:', data);
                setTour(data);
            } catch (error) {
                console.error('Error fetching tour details:', error);
            }
        };

        const checkUserReservation = async () => {
            try {
                const reservations = await ReservationRepository.getAllReservations(user.id); // Fetch all reservations of the user
                const hasReservationForTour = reservations.some(reservation => reservation.tour?.id === tourId);
                setHasReserved(hasReservationForTour); // Set true if user has reserved the tour
            } catch (error) {
                console.error('Error checking user reservations:', error);
            }
        };

        if (tourId) {
            fetchTourDetails();
            checkUserReservation(); // Check if the user already reserved the tour
        }
    }, [tourId, user.id]);

    if (!tour) {
        return <p>Loading tour details...</p>;
    }

    return (
        <TourDetailsContainer>
            <TourDetailsImage src={tour.imageurl} alt={tour.tourName} />
            <TourDetailsContent>
                <TourDetailsName>{tour.tourName}</TourDetailsName>
                <TourDetailsDescription>{tour.description}</TourDetailsDescription>
                <TourDetailsSection>
                    <TourDetailsDate>From: {new Date(tour.from).toLocaleDateString()}</TourDetailsDate>
                    <TourDetailsDate>To: {new Date(tour.to).toLocaleDateString()}</TourDetailsDate>
                </TourDetailsSection>
            </TourDetailsContent>
            <TourDetailsButtonContainer>
                <button className="favorite-btn" onClick={() => navigate(-1)}>Go Back</button>
                {user.role === "NORMAL" && !hasReserved && (
                    <button className="favorite-btn" onClick={() => navigate("/reservationform", { state: { tourId: tour.id } })}>
                        Reserve tour
                    </button>
                )}
                {hasReserved && <ReservationMessage>You have already reserved this tour.</ReservationMessage>}
            </TourDetailsButtonContainer>
        </TourDetailsContainer>
    );
};

export default TourDetails;
