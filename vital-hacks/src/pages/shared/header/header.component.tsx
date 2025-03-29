import React from 'react';
import { Panel } from 'primereact/panel';
import logo from '../../../images/logo.png';
import { HeaderProps } from './headerPage.props';
import './header.component.css';


export const Header = (props: HeaderProps) => {
    return (
        <Panel className="panel-background">
           <div style = {{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '100px', marginRight: '10px', padding: '10px'}} />
                <h1 style={{padding: '10px', textAlign: 'left', fontFamily: 'Montserrat, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, .5)'}} >Vital Hacks: {props.pageType} </h1>
           </div>
        </Panel>
    );
};