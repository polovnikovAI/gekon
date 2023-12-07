import React, { useState, useEffect } from 'react';
import logo from '../../photos/logo/gekon_logo_old.png';
import cl from './Navbar.module.css';
import GModal from '../UI/GModal/GModal';
import { Link } from 'react-router-dom';
import  { Link as LinkScroll } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import AuthorizationMenu from '../UI/AuthorizationMenu/AuthorizationMenu';
import icon from '../../photos/logo/burger-menu.svg'
import classNames from 'classnames';
import LinkScrollSettings from './LinkScrollSettings.ts';

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

    // Для пролистывания вверх по клику лого
    const scrollOptions = {
        duration: 900,
        smooth: true,
    }

    const scrollGekon = (options) => {
        animateScroll.scrollToTop(options);
    }
    
    // для адаптивного меню
    const [burgerClicked, setBurgerClicked] = useState(false);
    
    return (
        <div className={cl.navigation}>
            <Link to="/home">
                <img src={logo} alt="Gekon" className={cl.logo} onClick={() => scrollGekon(scrollOptions)} />
            </Link>
            <div className={burgerClicked ? classNames(cl.navbar, cl.responsive) : cl.navbar}>
                <img src={icon} alt="stripes" 
                        className={burgerClicked ? classNames(cl.burgerIcon, cl.burgerClickedActive) : classNames(cl.burgerIcon)}
                        onClick={() => {
                            setBurgerClicked(!burgerClicked);
                        }}
                />
                <LinkScroll to="moduleAbout" {...LinkScrollSettings} className={burgerClicked ? classNames(cl.navbarItem, cl.responsive) : cl.navbarItem}>
                    О нас
                </LinkScroll>
                <LinkScroll to="moduleSpeakers" {...LinkScrollSettings} offset={-95} className={burgerClicked ? classNames(cl.navbarItem, cl.responsive) : cl.navbarItem}>
                    Колонки
                </LinkScroll>
                <LinkScroll to="moduleServices" {...LinkScrollSettings} className={burgerClicked ? classNames(cl.navbarItem, cl.responsive) : cl.navbarItem}>
                    Услуги
                </LinkScroll>
                <LinkScroll to="moduleContacts" {...LinkScrollSettings} className={burgerClicked ? classNames(cl.navbarItem, cl.responsive) : cl.navbarItem}>
                    Контакты
                </LinkScroll>
                
                <span
                    className={burgerClicked ? classNames(cl.navbarItem, cl.responsive, cl.burgerActive) : cl.navbarItem}
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
                    <Link to={profileLink} style={{color: '#000'}}>Личный кабинет</Link>
                </span>
                
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