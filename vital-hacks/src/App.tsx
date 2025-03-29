import './App.css';
import { HomePageComponent } from './pages/homePage/homePage.components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { SelectionPageComponent } from './pages/selectionPage/selectionPage';
import {Tscene1Component} from './pages/Thomas Route/Tscene1';
import { StatusProvider } from './context/context';
import { Tscene3Component } from './pages/Thomas Route/Tscene3';
import {Tscene2Component} from "./pages/Thomas Route/Tscene2";
import {Tscene41Component} from "./pages/Thomas Route/Tscene4.1";
import { Tscene5Component } from './pages/Thomas Route/Tscene5';
 
function App() {
  return (
    <StatusProvider>
    <Router>
       <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/SelectionPage" element={<SelectionPageComponent />} />
        <Route path="/Thomas/Scenario1" element={<Tscene1Component/>} />
        <Route path="/Thomas/Scenario3" element={<Tscene3Component/>} />
        <Route path="/SelectionPage" element={<SelectionPageComponent />} />
        <Route path="/Thomas/Scenario1" element={<Tscene1Component/>} />
        <Route path="/Thomas/Scenario2" element={<Tscene2Component/>}/>
        <Route path="/Thomas/Scenario4.1" element={<Tscene2Component/>}/>
        <Route path="/Thomas/Scenario5" element={<Tscene5Component/>}/>
      </Routes>
  </Router>
  </StatusProvider>
  );
}

export default App;
