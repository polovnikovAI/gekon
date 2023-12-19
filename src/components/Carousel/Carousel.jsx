import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import cl from './Carousel.module.sass'
import './Carousel.sass'
import MyButton from '../UI/MyButton/MyButton'
import { Link } from 'react-router-dom'
import beforeCarouselPhoto1 from './photosCarousel/BKL_0873.jpg'
import beforeCarouselPhoto2 from './photosCarousel/BKL_0861.jpg'
import beforeCarouselPhoto3 from './photosCarousel/IvDBO5gYMpk.jpg'
import carouselPhoto1 from './photosCarousel/BKL_9167.jpg'
import carouselPhoto2 from './photosCarousel/BKL_9126.jpg'
import carouselPhoto3 from './photosCarousel/BKL_4930.jpg'
import carouselPhoto4 from './photosCarousel/BKL_9638.jpg'

const Carousel = () => {
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
        <div className={cl.carousel}>
            <div
                className={cl.sliderTitle}
                id='moduleSpeakers'
            >
                Собственное производство
            </div>
            <div className={cl.beforeCarousel}>
                <img
                    src={beforeCarouselPhoto1}
                    alt='Upload error'
                    className={cl.photoBeforeCarousel}
                />
                <img
                    src={beforeCarouselPhoto2}
                    alt='Upload error'
                    className={cl.photoBeforeCarousel}
                />
            </div>
            <div className={cl.beforeCarouselRender}>
                <img
                    src={beforeCarouselPhoto3}
                    alt='Upload error'
                    className={cl.photoRender}
                />
            </div>
            <div className={cl.sliderClass}>
                <Slider {...settings}>
                    <img
                        src={carouselPhoto1}
                        alt='Upload error'
                        className={cl.photoCarousel}
                    />
                    <img
                        src={carouselPhoto2}
                        alt='Upload error'
                        className={cl.photoCarousel}
                    />
                    <img
                        src={carouselPhoto3}
                        alt='Upload error'
                        className={cl.photoCarousel}
                    />
                    <img
                        src={carouselPhoto4}
                        alt='Upload error'
                        className={cl.photoCarousel}
                    />
                </Slider>
            </div>
            <div className={cl.toGallery}>
                <Link to='/gallery'>
                    <MyButton>Перейти в галерею</MyButton>
                </Link>
            </div>
        </div>
    )
}

export default Carousel
