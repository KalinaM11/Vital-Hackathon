import React from 'react';
import { Header } from '../shared/header/header.component'
import './homePage.component.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const HomePageComponent = () => {

    return (
        <div>
             <Header pageType= 'Home Page'/>
             <div className='box-container'>
                
             </div>
             <Button label="start" />
        </div>
    );
};