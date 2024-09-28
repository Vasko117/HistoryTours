import React, { createContext, useContext, useState, useEffect } from 'react';

export const GlobalContext = createContext({
    user: { username: '', email: '', password:'' },
});

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {
            id:'',
            email: '',
            username: '',
            password:'',
            reservations:[],
            favoriteLocations:[],
            role:''
        };
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};
