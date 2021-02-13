import './App.css';
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import GlobalState from './GlobalState';
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
        <GlobalState>
          <Router>
            <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register"  component={Register} />
                <Route path="/login"  component={Login} />
              </Switch>
            <Footer />
          </Router>
        </GlobalState>
    </div>
  );
}

export default App;
