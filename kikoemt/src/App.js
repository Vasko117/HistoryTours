import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalContext } from "./Context";
import Login from "./Login";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import LocationList from "./LocationList";
import LocationDetails from "./LocationDetails";
import LocationRepository from "./repo/LocationReposotory";
import FavouriteLocations from "./FavouriteLocations";
import AddTour from "./AddTour"
import TourList from "./TourList";
import TourDetails from "./TourDetails";
import FilteredTours from "./FilteredTours";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";

function App() {
    const { user, setUser } = useContext(GlobalContext);

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        console.log(user)
        const fetchLocations = async () => {
            try {
                const data = await LocationRepository.getAllLocations();
                if (Array.isArray(data)) {  // Check if data is an array
                    setLocations(data);
                } else {
                    console.error('Data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        user && user?.username!=="" && user.role ? (
                            user.role === 'NORMAL' ? (
                                <HomePage />
                            ) : user.role === 'HOST' ? (
                                <HomePage />
                            ) : (
                                <Navigate to="/login" />
                            )
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/locations" element={<LocationList />} />
                <Route path="/add-tour" element={<AddTour />} />
                <Route path="/tours" element={<TourList />} />
                <Route path="/tourdetails" element={<TourDetails />} />
                <Route path="/filteredtours" element={<FilteredTours />} />
                <Route path="/reservationform" element={<ReservationForm />} />
                <Route path="/reservations" element={<ReservationList />} />
                <Route path="/favlocations" element={<FavouriteLocations />} />
                <Route path="/locationdetails" element={<LocationDetails locations={locations} />} />
            </Routes>
        </Router>
    );
}

export default App;
