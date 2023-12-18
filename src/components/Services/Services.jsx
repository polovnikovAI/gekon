import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import cl from './Services.module.sass'
import '../Carousel/Carousel.sass'
import vinylCleaner from './photosServices/vinylCleaner.jpeg'
import restorationPhoto1 from './photosServices/2017-chopchop-1020.jpg'
import restorationPhoto2 from './photosServices/BKL_4923.jpg'
import restorationPhoto3 from './photosServices/BKL_4935.jpg'
import restorationPhoto4 from './photosServices/BKL_7261.jpg'
import restorationPhoto5 from './photosServices/BKL_7296.jpg'
import restorationPhoto6 from './photosServices/BKL_7301.jpg'

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
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className={cl.services}>
            <div className={cl.container}>
                <div className={cl.cleanVinyl}>
                    <div
                        className={cl.cleanVinylText}
                        id='moduleServices'
                    >
                        Мойка винила
                    </div>
                    <div className={cl.cleanVinylCard}>
                        <div className={cl.cleanVinylTextCard}>
                            <p className={cl.cleanVinylTextCardPart}>
                                Даже при самом аккуратном обращении с изделием на нем будет оседать пыль. Со временем
                                она начнет забиваться в звуковые канавки. Это приведет к потере качества звука и помехам
                                при воспроизведении мелодий.
                            </p>
                            <br />
                            <p className={cl.cleanVinylTextCardPart}>
                                Также, на блине часто остаются жирные пятна и следы от рук.
                            </p>
                        </div>
                        <img
                            src={vinylCleaner}
                            alt='Vinyl Cleaner'
                            className={cl.cleanVinylPhoto}
                        />
                    </div>
                </div>
                <div className={cl.restorationRepair}>
                    <div className={cl.restorationRepairText}>Реставрация и ремонт акустических систем</div>
                    <Slider {...settings}>
                        <img
                            src={restorationPhoto1}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                        <img
                            src={restorationPhoto2}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                        <img
                            src={restorationPhoto3}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                        <img
                            src={restorationPhoto4}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                        <img
                            src={restorationPhoto5}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                        <img
                            src={restorationPhoto6}
                            alt='Upload error'
                            className={cl.restorationPhoto}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Services
