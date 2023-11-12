import './App.css';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <About />
            <Carousel />
        </div>
        
    );
}

export default App;
