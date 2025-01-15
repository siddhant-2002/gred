import './App.css';
import './index.css';
import Home from './page/Home';
import Gerd from './page/Gerd';
import PortalHypertension from './page/PortalHypertension';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerd" element={<Gerd />} />
          <Route path="/portal-hypertension" element={<PortalHypertension />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;