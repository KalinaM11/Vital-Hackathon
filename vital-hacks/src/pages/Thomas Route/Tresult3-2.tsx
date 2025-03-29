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
            <Header pageType="Communication is key" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +20%" /> <br></br>
                <Message severity="info" text="Energy -5%" /> <br></br>
                <Message severity="warn" text="Food -15%" /> <br></br>
                <Message severity="warn" text="Hydration -10%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas is happy that his group mates have started to help him on his project after he had expressed his feelings.
                    However, he develops a head ache from lack of eating throughout the day.
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li>Communicating how one feels can lead to great emotional relief, lessening the stress that one is under </li>
                    <li>Communicating also helps prove relationships which is important in a group oriented project setting</li>
                    <li>Lack of food can cause blood pressure to drop leading to load energy and fatigue </li>
                    <li>Hunger can lead to quick irrability and fast mood swings </li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
