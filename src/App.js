import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projectz/Projects';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Portfolio />
            <Contact />
            {/* <PortfolioItem /> */}
        </div>
    );
}

export default App;
