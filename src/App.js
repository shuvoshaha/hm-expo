import './App.css';
 import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import GlobalState from './GlobalState';
import Footer from './Footer/Footer';
import Slider from './Components/Slider';
import Marquee from './Components/Marquee';

function App() {
  return (
    <div className="App">
        <GlobalState>
          <Router>
            <Header />
            <Slider />
            <Marquee />
            <Footer />
          </Router>
        </GlobalState>
    </div>
  );
}

export default App;
