import instance from './axios';

const CONTROLLER_PATH = '/tours';

class TourRepository {
  async getAllTours() {
    const response = await instance.get(CONTROLLER_PATH);
    return response.data;
  }

  async createTour(tourName,from,to,description,locationId,userId,imageurl) {
    const response = await instance.post(`${CONTROLLER_PATH}/create`, {tourName,from,to,description,locationId,imageurl,userId});
    return response.data;
  }

  async getTourById(id) {
    const response = await instance.get(`${CONTROLLER_PATH}/${id}`);
    return response.data;
  }
}

export default new TourRepository();
