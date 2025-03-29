import { Header } from '../shared/header/header.component'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import boyImage from '../../images/boyHomePage.png';
import girlImage from '../../images/girlHomePage.png'
import { Card } from 'primereact/card';

export const SelectionPageComponent = () => {

    return (
        <div>
             <Header pageType= 'Home Page'/>
        </div>
    );
};