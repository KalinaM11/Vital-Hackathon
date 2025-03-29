import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult2_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Importance of Food" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +20%" /> <br></br>
                <Message severity="success" text="Energy +10%" /> <br></br>
                <Message severity="success" text="Food +20%" /> <br></br>
                <Message severity="success" text="Hydration +10%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas feels much better now that he has food in his stomach and he has taken a break. He is 
                    able to return with a clear mind and lock in on his project
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li>Food supplies the calories that the body needs to fuction, restoring energy</li>
                    <li>Being hungry affects your ability to focues, so eating a meal helps to clear the mind</li>
                    <li>Taking a break improves concentration in the long run </li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
