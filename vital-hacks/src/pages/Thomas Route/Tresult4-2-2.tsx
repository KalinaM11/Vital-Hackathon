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
                <Message severity="warn" text="Happiness -10%" /> <br></br>
                <Message severity="warn" text="Energy -20%" /> <br></br>
                <Message severity="warn" text="Food -20%" /> <br></br>
                <Message severity="info" text="Hydration +0%" /> <br></br>
                {/* <Message severity="warn" text="Warning Message" /> */}
            </div>
            </div>
            <div className='results1_1-content'>
                <p>
                   Thomas is really having trouble concentrating and feels lightheaded but they finished the project!
                </p>
                <h3>Did you know?</h3>
                <ul className="fact-list">
                    <li> Eating frequently, with regular meal timing and balanced nutrition, is crucial for maintaining overall health, supporting energy levels, and potentially reducing the risk of chronic diseases like heart disease and type 2 diabetes </li>
                        <li>Regular meals provide a steady stream of energy, preventing energy crashes and promoting sustained focus and productivity throughout the day. 
                        </li>
                   
                </ul>
                <div className="button-container">
                    <Button label="Next" className="button" onClick={() => navigate('')} />
                </div>
            </div>
        </div>
        </div>
    );
};

