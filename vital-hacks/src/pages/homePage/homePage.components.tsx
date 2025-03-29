import { Header } from '../shared/header/header.component'
import './homePage.component.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import boyImage from '../../images/boyHomePage.png';
import girlImage from '../../images/girlHomePage.png'

export const HomePageComponent = () => {

    return (
        <div>
             <Header pageType= 'Home Page'/>
             <div className='box-container'>
                <div>
                    <img src={boyImage} alt="boyImage" style={{ height: '60vh', marginRight: '10px', padding: '10px', paddingLeft: '200px'}} />
                    <img src={girlImage} alt="girlImage" style={{ height: '60vh', marginRight: '10px', padding: '10px'}} />
                </div>  
             </div>
             <div className="button-container">
                <Button label="start" className="button"/>
             </div>
        </div>
    );
};