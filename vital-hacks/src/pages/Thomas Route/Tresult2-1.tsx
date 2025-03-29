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
            <Header pageType="Video Games" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +5%" /> <br></br>
                <Message severity="warn" text="Energy -30%" /> <br></br>
                <Message severity="info" text="Food -10%" /> <br></br>
                <Message severity="info" text="Hydration -10%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas had fun playing his video game but is now exhausted and is going to sleep. He regrets now going 
                    to bed earlier because he knows he will be more tired tomorrow. 
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li> Sleep deficiency is linked to many chronic health problems, including heart disease, kidney disease, high blood pressure, diabetes, stroke, obesity, and depression. </li>
                        <li>Sleep deficiency is also linked to a higher chance of injury in adults, teens, and children</li>
                    <li>Sleep helps regulate hormones that control appetite and metabolism, reducing the risk of obesity and diabetes. </li>
                    <li>Sleep also helps regulate the production of hormones like serotonin and dopamine, promoting feelings of well-being and reducing the risk of depression and anxiety. </li>
                    <li>Adequate sleep lowers blood pressure, reduces stress on the heart, and improves cardiovascular health. </li>
                   
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('/Thomas/Scenario3')} />
                </div>
            </div>
        </div>
        </div>
    );
};
