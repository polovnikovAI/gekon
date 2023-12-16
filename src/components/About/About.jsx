import React from 'react';
import s from './About.module.sass';
import classNames from 'classnames';

const About = () => {
    return (
        <div className={s.about} id="moduleAbout">
            <div className={s.container}>
                <div className={s.aboutHeader}>
                    О нас
                </div>
                <div className={s.aboutText}>
                    <div className={classNames(s.textCard, s.card1)}>
                        Gekon - это компания, которая занимается производством и реставрацией акустической аппаратуры с 2015 года.
                    </div>
                    <div className={classNames(s.textCard, s.card2)}>
                        GEKON - это про качество.
                    </div>
                    <div className={classNames(s.textCard, s.card3)}>
                        В нашей команде работают опытные специалисты, которые знают все тонкости производства акустической аппаратуры. Мы используем только качественные материалы и современное оборудование, чтобы гарантировать высокое качество нашей продукции.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;