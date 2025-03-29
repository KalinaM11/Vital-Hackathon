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
            <Header pageType="Stay in room" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="warn" text="Happiness -15%" /> <br></br>
                <Message severity="info" text="Energy +5%" /> <br></br>
                <Message severity="info" text="Food -5%" /> <br></br>
                <Message severity="info" text="Hydration -10%" /> <br></br>
                <Message severity="warn" text="Warning Message" />
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Staying inside made Thomas sad because he watched his siblings have fun from the window in his room. 
                    He also began to feel iritated because he did not have the sun on his skin or the fresh air that the outdoors provides.
                </p>
                <h3>*Why being outside is a good thing*</h3>
                <ul className="fact-list">
                    <li>Being cooped up inside can lead to feelings of "cabin fever"</li>
                    <li>Lack of socialization can lead to cognitive decline and mental health issues</li>
                    <li>Lack of excercise can affect physical health</li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
