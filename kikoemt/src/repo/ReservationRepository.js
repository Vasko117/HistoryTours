import instance from './axios';

const CONTROLLER_PATH = '/reservations';

class ReservationRepository {
    async getAllReservations(id) {
        const response = await instance.get(`${CONTROLLER_PATH}/by-user/${id}`);
        return response.data;
    }

    async createReservation(userId,tourId,reservationDate) {
        const response = await instance.post(`${CONTROLLER_PATH}/create`, {userId,tourId,reservationDate});
        return response.data;
    }

    async getReservationById(id) {
        const response = await instance.get(`${CONTROLLER_PATH}/${id}`);
        return response.data;
    }
}

export default new ReservationRepository();
