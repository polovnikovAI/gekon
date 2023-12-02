import '../styles/Home.css';
import About from '../components/About/About';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Feedback from '../components/Feedback/Feedback';


function Home() {
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