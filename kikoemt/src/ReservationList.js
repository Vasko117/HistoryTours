import React, {useContext, useEffect, useState} from 'react';
import ReservationRepository from './repo/ReservationRepository';
import {
    ReservationsContainer,
    ReservationCard,
    ReservationContent,
    ReservationTourName,
    ReservationDate,
    ReservationStatus,
    ReservationImage
} from './styled-components';
import { useNavigate } from 'react-router-dom';
import {GlobalContext} from "./Context";
import { format, isBefore } from 'date-fns'; // You can use date-fns to compare dates

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(GlobalContext);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const data = await ReservationRepository.getAllReservations(user.id);
                console.log('Fetched reservations:', data);
                setReservations(data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    const getStatus = (reservationDate) => {
        const reservationDateObj = new Date(reservationDate);
        const now = new Date();
        return isBefore(reservationDateObj, now) ? 'FINISHED' : 'UPCOMING';
    };

    return (
        <ReservationsContainer>
            {reservations.length > 0 ? (
                reservations.map((reservation) => (
                    <ReservationCard key={reservation.id} onClick={() => { navigate("/tourdetails", { state: { tourId: reservation.tour?.id } }) }}>
                        <ReservationImage src={reservation.tour?.imageurl} alt={reservation.tour?.tourName} />
                        <ReservationContent>
                            <ReservationTourName>{reservation.tour?.tourName}</ReservationTourName>
                            <ReservationDate>Date: {format(new Date(reservation.reservationDate), 'yyyy-MM-dd')}</ReservationDate>
                            <ReservationStatus>Status: {getStatus(reservation.reservationDate)}</ReservationStatus>
                        </ReservationContent>
                    </ReservationCard>
                ))
            ) : (
                <p>No reservations available.</p>
            )}
        </ReservationsContainer>
    );
};

export default ReservationList;
