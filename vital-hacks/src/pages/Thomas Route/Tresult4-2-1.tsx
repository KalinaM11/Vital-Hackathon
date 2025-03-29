import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult3_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Outside Time" />
            <div className="result-page">
            <div className="results1_1-container">
                <img src={boyImage} alt="boyImage" className="result-image" />
                <div>
                <Message severity="warn" text="Happiness -15%" /> <br></br>
                <Message severity="success" text="Energy +10%" /> <br></br>
                <Message severity="success" text="Food +20%" /> <br></br>
                <Message severity="info" text="Hydration +0%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                    Thomas feels a lot better after having a granola bar, and he feels less irritated. But when he comes 
                    back to his group he finds that they are on their way out becuase they claim they have to go home and 
                    now Thomas is left to finish the project all by himself. 
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li> Skipping meals can lead to various negative consequences, including slowed metabolism, nutrient deficiencies, blood sugar fluctuations, and potentially increased risk of chronic diseases, as well as affecting energy levels, mood, and digestion </li>
                        <li>Avoiding communication can lead to misunderstandings, strained relationships, and missed opportunities, while open and effective communication fosters understanding, builds trust, and promotes positive outcomes in personal and professional settings. </li>
                   
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};
