import React from 'react';
import cl from './Footer.module.sass'
import { Link as LinkScroll } from 'react-scroll';

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.info}>
                    <div className={cl.socials}>
                        <p className={cl.socialsTitle}>Мы в социальных сетях:</p>
                        <div className={cl.socialFacebook}>
                            <a href="https://www.facebook.com/gekoncustoms/" target="_blank" rel="noreferrer">Facebook*</a>
                        </div>
                        <div className={cl.socialInstagram}>
                            <a href="https://www.instagram.com/gekon_customs/" target="_blank" rel="noreferrer">Instagram*</a>
                        </div>
                        <div className={cl.socialVk}>
                            <a href="https://vk.com/gekon_customs" target="_blank" rel="noreferrer">Вконтакте</a>
                        </div>
                    </div>
                    <div className={cl.connections}>
                        <p className={cl.connectionsTitle}>Связаться с нами:</p>
                        <div className={cl.connectionRequest}>
                            <LinkScroll to="moduleContacts" spy={true} smooth={true} offset={-100} duration={600}>Оставить заявку</LinkScroll>
                        </div>
                        <div className={cl.connectionNumber}>
                            8 (888) 888-88-88
                        </div>
                        <div className={cl.connectionEmail}>
                            manager@gekon.audio
                        </div>
                    </div>
                </div>
                <div className={cl.extraInfo}>
                    <p>Екатеринбург, © 2015-2023 ООО "Гекон Аудио"</p>
                    <p>* Meta Platforms Inc. признана экстремистской организацией на территории РФ</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;