import React from 'react';
import cl from './About.module.css';

const About = () => {
    return (
        <div className={cl.about} id="moduleAbout">
            <div className={cl.container}>
                <div className={cl.about__header}>
                    О НАС
                </div>
                <div className={cl.about__text}>
                    <div className={`${cl.about__text} ${cl.block__1}`}>
                        Gekon - это компания, которая занимается производством и реставрацией акустической аппаратуры с 2015 года.
                    </div>
                    <div className={`${cl.about__text} ${cl.block__2}`}>
                        GEKON - это про качество
                    </div>
                    <div className={`${cl.about__text} ${cl.block__3}`}>
                            В нашей команде работают опытные специалисты, которые знают все тонкости производства акустической аппаратуры. Мы используем только качественные материалы и современное оборудование, чтобы гарантировать высокое качество нашей продукции.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;