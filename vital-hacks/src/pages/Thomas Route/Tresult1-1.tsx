import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult1_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Outside Time" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +5%" /> <br></br>
                <Message severity="success" text="Energy +5%" /> <br></br>
                <Message severity="info" text="Food -10%" /> <br></br>
                <Message severity="info" text="Hydration -10%" /> <br></br>
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <h3>*insert facts*</h3>
                <ul className="fact-list">
                    <li>helps with</li>
                    <li>helps with</li>
                    <li>helps with</li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
