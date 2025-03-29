import { Header } from '../shared/header/header.component'
import './homePage.component.css';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

export const TResult1_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType='Result Page' />
            <div className='results1_1-conatiner'>
                <img src={boyImage} alt="boyImage" style={{ height: '60vh', marginRight: '10px', padding: '10px', paddingLeft: '200px' }} />
            </div>
            <div>
                <h1>*insert title*</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <h3>*insert facts*</h3>
                <p>
                    Vitamin D 
                    <ul>
                        <li>helps with</li>
                        <li>helps with</li>
                        <li>helps with</li>
                    </ul>
                </p>
                <div>
                    <div className="button-container">
                        <Button label="start" className="button" onClick={() => navigate('/SelectionPage')} />
                    </div>
                </div>
            </div>
        </div>
    );
};