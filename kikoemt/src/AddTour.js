import React, {useContext, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import LocationReposotory from "./repo/LocationReposotory";
import {GlobalContext} from "./Context"; // Import repository
import './AddTour.css';
import TourRepository from "./repo/TourRepository";
const AddTour = () => {
    const loc = useLocation();
    const [tourName, setTourName] = useState('');
    const { locationId } = loc.state || {};
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');
    const [imageurl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useContext(GlobalContext);  // Get user from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = user.id
        try {
            await TourRepository.createTour(tourName, from, to, description, locationId,userId, imageurl);
            navigate("/locationdetails", { state: { locationId: locationId } })
        } catch (error) {
            console.error('Error creating tour:', error);
        }
    };

    return (
        <form className="tourform" onSubmit={handleSubmit}>
            <input type="text" value={tourName} onChange={e => setTourName(e.target.value)} placeholder="Tour Name" required />
            <input type="date" value={from} onChange={e => setFrom(e.target.value)} placeholder="From" required />
            <input type="date" value={to} onChange={e => setTo(e.target.value)} placeholder="To" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text"   value={imageurl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" />
            <button type="submit">Add Tour</button>
        </form>
    );
};

export default AddTour;
