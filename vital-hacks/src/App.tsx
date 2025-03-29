import './App.css';
import { HomePageComponent } from './pages/homePage/homePage.components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { SelectionPageComponent } from './pages/selectionPage/selectionPage';
 
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/SelectionPage" element={<SelectionPageComponent />} />
      </Routes>
  </Router>
  );
}

export default App;
