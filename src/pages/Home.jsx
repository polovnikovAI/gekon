import '../styles/Home.css';
import About from '../components/About/About';
import Carousel from '../components/Carousel/Carousel';
import { useState } from 'react';

function Home() {


    return (
        <div className='App'>
            <About />
            <Carousel />
        </div>
        
    );
}

export default Home;