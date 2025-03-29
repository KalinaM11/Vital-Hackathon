import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult2_2Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Full Night's Sleep" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +15%" /> <br></br>
                <Message severity="success" text="Energy +40%" /> <br></br>
                <Message severity="info" text="Food -10%" /> <br></br>
                <Message severity="info" text="Hydration -10%" /> <br></br>
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas awoke feeling fully rested because he chose to get a full amount of sleep before school. 
                    He ends up doing amazing on his algrebra quiz.
                </p>
                <h3>*Did you know?*</h3>
                <ul className="fact-list">
                    <li>Having a good nights rest is important to cognitive function the next day</li>
                    <li>Sleep is important for developing memory</li>
                    <li>Sleep allows you to concentrate more efficiently the next day</li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
