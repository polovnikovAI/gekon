import '../styles/Home.css';
import About from '../components/About/About';
import Carousel from '../components/Carousel/Carousel';
import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Feedback from '../components/Feedback/Feedback';

function Home() {
    console.log('проверка proxy и тест для дальнейшей работы с беком');
    const [test , setTest] = useState(' ')

    fetch('/api/test').then(response => response.json())
    .then(response => setTest(JSON.stringify(response)))


    setTimeout(() => console.log(`ебучие промисы ${test}`) , 1)
    



    return (
        <div className='App'>
            <About />
            <Carousel />
            <Feedback />
            <Footer />
        </div>
        
    );
}

export default Home;