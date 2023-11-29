import React, { useState, useEffect} from 'react';
import logo from '../../photos/logo/gekon_logo_old.png'
import cl from './Navbar.module.css'
import MyButton from '../UI/MyButton/MyButton';
import GModal from '../UI/GModal/GModal';
import { Link } from 'react-router-dom';
import AuthorizationMenu from '../UI/AuthorizationMenu/AuthorizationMenu';

const Navbar = () => {
    const buttonStyle = { color: "black" ,
        marginLeft: "40px",
        backgroundColor: "#428567",
    }

    const [modal , setModal] = useState(false);
    const [profileLink, setProfileLink] = useState('');
    const [link , setLink] = useState((localStorage.getItem('ID') === null) ? false : true);
    
    useEffect(()=> {
        if (link === false) {
            setProfileLink('')
        }
        else if (link === true){
            setProfileLink('/profile')
        }
    }, [link])


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
                        if (localStorage.getItem('ID') === null){
                            setLink(false)
                            setModal(true);
                        }
                        else{
                            setLink(true);
                        }
                    }}>
                    <Link to  = {profileLink} style={{color: 'black'}}> Личный кабинет </Link>
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