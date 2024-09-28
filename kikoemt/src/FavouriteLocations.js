import React, {useContext, useEffect, useState} from 'react';
import LocationRepository from './repo/LocationReposotory';
import {
    LocationsContainer,
    LocationCard,
    LocationImage,
    LocationContent,
    LocationName,
    LocationDescription,
    LocationDetails,
    SearchInput
} from './styled-components';
import { useNavigate } from "react-router-dom";
import {GlobalContext} from "./Context";

const LocationList = () => {
    const { user } = useContext(GlobalContext);
    const [locations, setLocations] = useState([]);
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await LocationRepository.getAllForUserLocations(user.id);
                setLocations(data);
                setFilteredLocations(data); // Set initially to display all locations
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        // Filter locations by period when searchTerm matches the start of the period
        if (searchValue === '') {
            setFilteredLocations(locations); // If no input, show all
        } else {
            const filtered = locations.filter(location =>
                location.period.toLowerCase().startsWith(searchValue)
            );
            setFilteredLocations(filtered);
        }
    };

    return (
        <div>
            <SearchInput
                type="text"
                placeholder="Search by period..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <LocationsContainer>
                {filteredLocations.map((location) => (
                    <LocationCard key={location.id} onClick={() => { nav("/locationdetails", { state: {  locationId: location.id } }) }}>
                        <LocationImage src={location.imageurl} alt={location.name} />
                        <LocationContent>
                            <LocationName>{location.name}</LocationName>
                            <LocationDescription>{location.description}</LocationDescription>
                            <LocationDetails>
                                <p>Period: {location.period}</p>
                            </LocationDetails>
                        </LocationContent>
                    </LocationCard>
                ))}
            </LocationsContainer>
        </div>
    );
};

export default LocationList;