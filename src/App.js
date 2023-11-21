import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
