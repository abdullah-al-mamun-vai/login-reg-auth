import React, { useContext } from 'react';
import { AuthContext } from '../context/Context';
import Login from './Login';

const Pivate = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Login></Login>
};

export default Pivate;