import instance from './axios';
import axios from './axios';

const CONTROLLER_PATH = '/locations';

class LocationRepository {
    async getAllForUserLocations(userId) {
        const response = await axios.get(`${CONTROLLER_PATH}/all-locations/${userId}`);
        return response.data;
    }
    async getToursForLocationId (locationId)  {
    const response = await axios.get(`${CONTROLLER_PATH}/tours/${locationId}`); // Adjust the URL if needed
    return response.data; // Return the list of tours
}
    async getAllLocations() {
        const response = await axios.get(CONTROLLER_PATH);
        return response.data;
    }

    async getLocationById(id) {
        const response = await instance.get(`${CONTROLLER_PATH}/${id}`);
        return response.data;
    }

    async toggleFavoriteLocation(userId, locationId) {
        const response = await instance.post(`${CONTROLLER_PATH}/toggle-favorite/${userId}/${locationId}`);
        return response.data;  // Returns true if it's now a favorite, false otherwise
    }

}

export default new LocationRepository();
