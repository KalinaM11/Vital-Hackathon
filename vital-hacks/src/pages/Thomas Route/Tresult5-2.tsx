import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult5_2Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Veggie Time!" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="success" text="Happiness +20%" /> <br></br>
                <Message severity="success" text="Energy +20%" /> <br></br>
                <Message severity="success" text="Food +30%" /> <br></br>
                <Message severity="success" text="Hydration +20%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas feels so much better after having fiber in his system and visiting the bathroom.
                    He has now learned that he must each his veggies as they will improve his bowel movements.
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li>Leafy greens are high in fiber and magnesium, aiding in digestion</li>
                    <li>Vegitables provide many of the key nutrients that a person needs throughout the day</li>
                    <li>Veggies help boost the immune system, fighting off future illnesses</li>
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate("/Thomas/Final")} />
                </div>
            </div>
        </div>
        </div>
    );
};
