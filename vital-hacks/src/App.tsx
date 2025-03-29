import './App.css';
import { HomePageComponent } from './pages/homePage/homePage.components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
 
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
  </Router>
  );
}

export default App;
