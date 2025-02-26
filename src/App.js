import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <Nav />
          <Home />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
