import instance from './axios';

const CONTROLLER_PATH = '/users';

class UserRepository {
    async logIn(username, password) {
        const response = await instance.post(`${CONTROLLER_PATH}/login`, {
            username: username,
            password: password
        });
        return response.data;
    }
}

export default new UserRepository();
