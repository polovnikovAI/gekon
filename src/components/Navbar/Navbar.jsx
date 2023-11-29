import React, { useState } from 'react';
import logo from '../../photos/logo/gekon_logo_old.png'
import cl from './Navbar.module.css'
import MyButton from '../UI/MyButton/MyButton';
import GModal from '../UI/GModal/GModal';
import AuthorizationMenu from '../UI/AuthorizationMenu/AuthorizationMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const buttonStyle = { color: "black" ,
        marginLeft: "40px",
    }

    const [modal , setModal] = useState(false);

    return (
        <div className={cl.navigation}>
            <Link to="/home">
                <img src={logo} alt="Gekon" className={cl.logo} />
            </Link>
            <div className={cl.navbar}>
                <li>О нас</li>
                <li>Колонки</li>
                <li>Портфолио</li>
                <li>Услуги</li>
                <li>Контакты</li>

                <MyButton 
                    style = {buttonStyle} 
                    // если пользоваетль авторизован, то переносит в ЛК, если нет, 
                    // то сначало регистрация/авторизация, а затем при повторном нажатии (или сразу перенос в ЛК)
                    onClick = {(event) => {
                        event.preventDefault(); 
                        setModal(true);
                    }}>
                    Личный кабинет
                </MyButton>

            </div>
        
                <GModal 
                    visible = {modal} 
                    setVisible={setModal} 
                >
                    <AuthorizationMenu/>
                    
                </GModal>
        </div>
    );
};

export default Navbar;