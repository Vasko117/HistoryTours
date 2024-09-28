import React, { useEffect, useState } from 'react';
import {
    ToursContainer,
    TourBillboard,
    TourContent,
    TourName,
    TourDate,
    TourDescription,
    TourImage
} from './styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import LocationReposotory from "./repo/LocationReposotory";

const FilteredTours = () => {
    const loc = useLocation();
    const [tours, setTours] = useState([]);
    const nav = useNavigate();
    const { locationId } = loc.state || {}; // Get the location ID from the passed state

    useEffect(() => {
        const fetchTours = async () => {
            try {
                // Fetch tours for the specific location ID
                const response = await LocationReposotory.getToursForLocationId(locationId);
                console.log('Fetched tours for location:', response);  // Log the API response
                setTours(response); // Set the fetched tours
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };

        fetchTours();
        console.log(tours)
    }, [locationId]); // Add locationId as a dependency

    return (
        <ToursContainer>
            {tours.map((tour) => (
                    <TourBillboard key={tour.id} onClick={() => { nav("/tourdetails", { state: { tourId: tour.id } }) }}>
                        <TourImage src={tour.imageurl} alt={tour.tourName} />
                        <TourContent>
                            <TourName>{tour.tourName}</TourName>
                            <TourDate>From: {tour.from} To: {tour.to}</TourDate>
                            <TourDescription>{tour.description}</TourDescription>
                        </TourContent>
                    </TourBillboard>
                ))}

        </ToursContainer>
    );
};

export default FilteredTours;
