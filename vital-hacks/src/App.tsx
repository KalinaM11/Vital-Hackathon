import './App.css';
import { HomePageComponent } from './pages/homePage/homePage.components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { SelectionPageComponent } from './pages/selectionPage/selectionPage';
import { TResult1_1Component } from './pages/Thomas Route/Tresult1-1'; 
 
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/SelectionPage" element={<SelectionPageComponent />} />
        <Route path="/Scenario1Result1" element={<TResult1_1Component />} />
      </Routes>
  </Router>
  );
}

export default App;
