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
                        <Message severity="success" text="Energy +15%" /> <br></br>
                        <Message severity="info" text="Food -10%" /> <br></br>
                        <Message severity="info" text="Hydration -15%" /> <br></br>
                    </div>
                </div>
                <div className='results1_1-content'>
                    <p>
                        Thomas joined his dad and siblings on the bikes ride! His mood significantly improved. During this Thomas was able to 
                        have a conversation with his dad about how his upcoming algebra quiz and science fair project has been stressing him out.
                    </p>
                    <h3>Did you know?</h3>
                    <ul className="fact-list">
                        <li>Vitamin D is linked to serotonine and doapmine regulation. Getting sunlight, a source of Vitamin D 
                            is important for your mental well-being! </li>
                        <li>Simply talking about our problems and sharing our negative emotions with someone we trust 
                            is a greta way to reduce stress. In doing so it also strenghtens our immune systems!</li>
                    </ul>
                    <div className="button-container">
                        <Button label="Next" className="button" onClick={() => navigate('/Thomas/Scenario2')} />
                    </div>
                </div>
            </div>
        </div>
    );
};