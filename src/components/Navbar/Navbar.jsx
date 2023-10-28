import React from 'react';
import logo from '../../photos/logo/logoHD-transformed.png'
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navigation}>
            <img src={logo} alt="Gekon" className={cl.logo} />
            <div className={cl.navbar}>
                <li>О нас</li>
                <li>Колонки</li>
                <li>Портфолио</li>
                <li>Услуги</li>
                <li>Контакты</li>
            </div>
        </div>
    );
};

export default Navbar;