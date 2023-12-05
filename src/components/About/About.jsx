import React from 'react';
import cl from './About.module.css';
import classNames from 'classnames';

const About = () => {
    return (
        <div className={cl.about} id="moduleAbout">
            <div className={cl.container}>
                <div className={cl.aboutHeader}>
                    О нас
                </div>
                <div className={cl.aboutText}>
                    <div className={classNames(cl.textCard, cl.card1)}>
                        Gekon - это компания, которая занимается производством и реставрацией акустической аппаратуры с 2015 года.
                    </div>
                    <div className={classNames(cl.textCard, cl.card2)}>
                        GEKON - это про качество.
                    </div>
                    <div className={classNames(cl.textCard, cl.card3)}>
                            В нашей команде работают опытные специалисты, которые знают все тонкости производства акустической аппаратуры. Мы используем только качественные материалы и современное оборудование, чтобы гарантировать высокое качество нашей продукции.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;