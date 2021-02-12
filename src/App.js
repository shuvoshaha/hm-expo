import './App.css';
 import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Components/Sidebar';



function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Sidebar />
        </Router>
    </div>
  );
}

export default App;
