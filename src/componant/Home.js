import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/Context';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h3>wellcome to our Home Pag</h3>
        </div>
    );
};

export default Home;