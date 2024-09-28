import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './LocationDetails.css';
import { GlobalContext } from './Context';  // Import user context
import LocationReposotory from "./repo/LocationReposotory";
import { useLocation } from 'react-router-dom';
import {LocationCard, LocationContent, LocationDescription, LocationImage, LocationName} from "./styled-components";  // Import repository

const LocationDetails = ({ locations }) => {
    const loc = useLocation();
    const { user, setUser } = useContext(GlobalContext);
    const [location, setLocation] = useState(null);// Get user from context
    const nav = useNavigate();
    const { locationId } = loc.state || {}; // Default to empty object to avoid destructuring null/undefined
    const [isFavorite, setIsFavorite] = useState(false);
    const loadLocation = async () => {
        try {
            const data = await LocationReposotory.getLocationById(locationId);
            setLocation(data)
            console.log(location)
        } catch (error) {
            console.error('Failed to load', error);
        }
    };
    useEffect(() => {
        loadLocation()
        if (user && user.favoriteLocations) {
            setIsFavorite(user.favoriteLocations.some(loc => loc.id === parseInt(locationId)));
        }
    }, [locationId, user]);

    if (!location) {
        return <div>Location not found</div>;
    }

    const toggleFavorite = async () => {
        try {
            const updatedStatus = await LocationReposotory.toggleFavoriteLocation(user.id, location.id);
            setIsFavorite(updatedStatus);
            const updatedUser = {
                ...user,
                favoriteLocations: updatedStatus
                    ? [...user.favoriteLocations, location]  // Add location
                    : user.favoriteLocations.filter(loc => loc.id !== location.id)  // Remove location
            };
            setUser(updatedUser);
            console.log(user);
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    const handleAddTour = () => {
        nav("/add-tour", { state: { locationId: location.id } }) // Navigate to the add tour form
    };

    return (
        <div className="location-details">
            {user.role === 'HOST' && (
                <button onClick={handleAddTour} className="add-tour-btn">
                    Add Tour
                </button>
            )}
            <div className="location-header">
                <h1>{location.name}</h1>
            </div>
            <div className="location-content">
                <img src={location.imageurl} alt={location.name} className="location-image" />
                <div className="location-info">
                    <p><strong>Description:</strong> {location.description}</p>
                    <p><strong>Historical Period:</strong> {location.period}</p>
                    {user.role==="NORMAL" && <button onClick={toggleFavorite} className={`favorite-btn ${isFavorite ? 'liked' : ''}`}>
                        {isFavorite ? 'Remove from favourites' : 'Add to favourites'}
                    </button>}
                    <button onClick={() => nav("/filteredtours", { state: { locationId: location.id } })} className="info-btn">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationDetails;
