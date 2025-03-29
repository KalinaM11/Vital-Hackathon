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
import {Tscene42Component} from "./pages/Thomas Route/Tscene4.2";
import { Tscene5Component } from './pages/Thomas Route/Tscene5';
import {TResult1_1Component } from "./pages/Thomas Route/Tresult1-1"
import {TResult2_1Component } from "./pages/Thomas Route/Tresult2-1"
import {TResult3_1Component } from "./pages/Thomas Route/Tresult3-1"
 
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
        <Route path="/Thomas/Scenario4.1" element={<Tscene41Component/>}/>
        <Route path="/Thomas/Scenario4.2" element={<Tscene42Component/>}/>
        <Route path="/Thomas/Scenario5" element={<Tscene5Component/>}/>
        <Route path="/Scenario1Result1" element={<TResult1_1Component />} />
        <Route path="/Scenario2Result1" element={<TResult2_1Component />} />
        <Route path="/Scenario3Result1" element={<TResult3_1Component />} />
      </Routes>
  </Router>
  </StatusProvider>
  );
}

export default App;
