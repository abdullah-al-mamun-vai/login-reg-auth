import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to={'/home'}>Home</Link>
                <Link className="mx-2" to={'/login'}>Login</Link>
                <Link className='mx-3' to={'/register'}>Register</Link>
                <Link to={'/orders'}>Orders</Link>
                <p className='mx-3'>wellcome: {user?.email}</p>
                {user ? <button className='btn btn-sm' onClick={logout}>sing out</button> : <Link to={'/login'}>Login</Link>}
            </div>
        </div>
    );
};

export default Header;