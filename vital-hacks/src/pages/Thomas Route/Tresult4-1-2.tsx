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
            <Header pageType="Space is Helpful" />
            <div className="result-page">
                <div className="results1_1-container">
                    <img src={boyImage} alt="boyImage" className="result-image" />
                    <div>
                        <Message severity="success" text="Happiness +5%" /> <br></br>
                        <Message severity="warn" text="Energy -10%" /> <br></br>
                    </div>
                </div>
                <div className='results1_1-content'>
                    <p>
                        Thomas takes a deep breath, stepping away from the noisy group to find a quiet corner and collect himself.
                        After a few moments of calm, he reminds himself that he’s come this far and can push through the rest of
                        the club meeting. Feeling a little steadier, he heads back to rejoin his friends, ready to finish the task
                        with renewed focus.
                    </p>
                    <h3>Did you know?</h3>
                    <ul className="fact-list">
                        <li> Stepping away from a stressful environment allows the body to activate the relaxation response,
                            lowering heart rate and cortisol levels. </li>
                        <li>Taking regular breaks can help prevent emotional and mental burnout, ensuring sustained energy 
                            and productivity over time.</li>
                    </ul>
                    <div className="button-container">
                        <Button label="Next" className="button" onClick={() => navigate('')} />
                    </div>
                </div>
            </div>
        </div>
    );
};