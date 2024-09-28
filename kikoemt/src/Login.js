import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './Context';
import './Login.css'; // Add the styles
import instance from "./repo/axios";
import UserRepository from "./repo/UserRepository";

function Login() {
    const { setUser } = useContext(GlobalContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await UserRepository.logIn(username,password);
            setUser({
                id:userData.id,
                email: userData.email,
                username: userData.username,
                password:userData.password,
                reservations:userData.reservations,
                favoriteLocations:userData.favoriteLocations,
                role:userData.role
            })

            navigate('/');
        } catch (error) {
            console.error('Authentication failed', error);
        }        navigate('/');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login to Your Account</h1>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;
