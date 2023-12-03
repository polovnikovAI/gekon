import React, { useState, useEffect } from 'react';
import logo from '../../photos/logo/gekon_logo_old.png';
import cl from './Navbar.module.css';
import GModal from '../UI/GModal/GModal';
import { Link } from 'react-router-dom';
import  { Link as LinkScroll } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import AuthorizationMenu from '../UI/AuthorizationMenu/AuthorizationMenu';
import icon from '../../photos/logo/burger-menu.svg'

const Navbar = () => {

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

    const scrollOptions = {
        duration: 900,
        smooth: true,
    }

    const scrollGekon = (options) => {
        animateScroll.scrollToTop(options)
    }

    return (
        <div className={cl.navigation}>
            <Link to="/home">
                <img src={logo} alt="Gekon" className={cl.logo} onClick={() => scrollGekon(scrollOptions)} />
            </Link>
            <div className={cl.navbar}>
                <LinkScroll to="moduleAbout" spy={true} smooth={true} offset={-100} duration={600} className={cl.navbarItem}>
                    О нас
                </LinkScroll>
                <LinkScroll to="moduleSpeakers" spy={true} smooth={true} offset={-110} duration={600} className={cl.navbarItem}>
                    Колонки
                </LinkScroll>

                <LinkScroll to="moduleSevices" spy={true} smooth={true} offset={-100} duration={600} className={cl.navbarItem}>
                    Услуги
                </LinkScroll>
                <LinkScroll to="moduleContacts" spy={true} smooth={true} offset={-100} duration={600} className={cl.navbarItem}>
                    Контакты
                </LinkScroll>
                
                <span
                    onClick = {(event) => {
                        event.preventDefault(); 
                        if (localStorage.getItem('ID') === null){
                            setLink(false);
                            setModal(true);
                        }
                        else{
                            setLink(true);
                        }
                    }}
                >
                    <Link to={profileLink}>Личный кабинет</Link>
                </span>
                <img src={icon} alt="stripes" className={cl.burgerMenu} />
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