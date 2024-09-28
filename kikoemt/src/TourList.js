import React, { useEffect, useState } from 'react';
import TourRepository from './repo/TourRepository';
import {
    ToursContainer,
    TourBillboard,
    TourContent,
    TourName,
    TourDate,
    TourDescription,
    TourImage
} from './styled-components';
import {useNavigate} from "react-router-dom";

const TourList = () => {
    const [tours, setTours] = useState([]);
    const nav=useNavigate()
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const data = await TourRepository.getAllTours();
                console.log('Fetched tours:', data);  // Log the API response
                setTours(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };

        fetchTours();
    }, []);

    return (
        <ToursContainer>
            {tours.length > 0 ? (
                tours.map((tour) => (
                    <TourBillboard key={tour.id} onClick={() => { nav("/tourdetails", { state: { tourId: tour.id } }) }}>
                        <TourImage src={tour.imageurl} alt={tour.tourName} />
                        <TourContent>
                            <TourName>{tour.tourName}</TourName>
                            <TourDate>From: {tour.from} To: {tour.to}</TourDate>
                            <TourDescription>{tour.description}</TourDescription>
                        </TourContent>
                    </TourBillboard>
                ))
            ) : (
                <p>No tours available.</p>
            )}
        </ToursContainer>
    );
};

export default TourList;
