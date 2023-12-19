import About from '../components/About/About'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import Feedback from '../components/Feedback/Feedback'
import Services from '../components/Services/Services'

function Home() {
    return (
        <div className='App'>
            <About />
            <Carousel />
            <Services />
            <Feedback />
            <Footer />
        </div>
    )
}

export default Home
