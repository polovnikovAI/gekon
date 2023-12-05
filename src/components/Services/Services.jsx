import React from 'react';
import cl from './Services.module.css';
import Slider from 'react-slick';
import cleaner from './photosServices/vinylCleaner.jpeg';
import './Services.css'


const Services = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };

    return (
        <div className={cl.services}>
            <div className={cl.container}>
                <div className={cl.cleanVinyl}>
                    <div className={cl.cleanVinylText} id="moduleServices">Мойка винила</div>
                    <div className={cl.cleanVinylCard}>
                        <div className={cl.cleanVinylTextCard}>
                            <p className={cl.cleanVinylTextCardPart}>Даже при самом аккуратном обращении с изделием на нем будет оседать пыль. Со временем она начнет забиваться в звуковые канавки. Это приведет к потере качества звука и помехам при воспроизведении мелодий.</p>
                            <br/>
                            <p className={cl.cleanVinylTextCardPart}>Во-вторых, на блине часто остаются жирные пятна и следы от рук.</p>
                        </div>
                        <img src={cleaner} alt="Vinyl Cleaner" className={cl.cleanVinylPhoto}/>
                    </div>
                </div>
                <div className={cl.restorationRepair}>
                    <div className={cl.restorationRepairText}>Реставрация и ремонт акустических систем</div>
                        <Slider {...settings}>
                            <img src={require('./photosServices/2017-chopchop-1020.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                            <img src={require('./photosServices/BKL_4923.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                            <img src={require('./photosServices/BKL_4935.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                            <img src={require('./photosServices/BKL_7261.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                            <img src={require('./photosServices/BKL_7296.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                            <img src={require('./photosServices/BKL_7301.jpg')} alt='Upload error' className={cl.restorationPhoto} />
                        </Slider>
                </div>
            </div>
        </div>
    );
};

export default Services;