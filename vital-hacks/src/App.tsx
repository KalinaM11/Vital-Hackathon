import './App.css';
import { HomePageComponent } from './pages/homePage/homePage.components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { SelectionPageComponent } from './pages/selectionPage/selectionPage';
import {Tscene1Component} from './pages/Thomas Route/Tscene1';
import { StatusProvider } from './context/context';
import {Tscene2Component} from "./pages/Thomas Route/Tscene2";
 
function App() {
  return (
    <StatusProvider>
    <Router>
       <Routes>
        <Route path="/" element={<HomePageComponent />} />
        {/* <Route path="/SelectionPage" element={<SelectionPageComponent />} />
        <Route path="/Thomas/Scenario1" element={<Tscene1Component/>} /> */}
        <Route path="/Thomas/Scenario2" element={<Tscene2Component/>}/>
      </Routes>
  </Router>
  </StatusProvider>
  );
}

export default App;
