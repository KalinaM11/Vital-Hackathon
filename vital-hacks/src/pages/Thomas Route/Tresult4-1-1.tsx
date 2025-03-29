import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult41_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Communication is Key" />
            <div className="result-page">
                <div className="results1_1-container">
                    <img src={boyImage} alt="boyImage" className="result-image" />
                    <div>
                        <Message severity="success" text="Happiness +10%" /> <br></br>
                        <Message severity="success" text="Energy +2%" /> <br></br>
                        <Message severity="info" text="Food -20%" /> <br></br>
                    </div>
                </div>
                <div className='results1_1-content'>
                    <p>
                    Thomas, overwhelmed by the noise and frustration, accidentally snaps the wire and starts crying. 
                    His friends notice and ask what’s wrong, and he finally admits he’s struggling to focus and feels like 
                    he’s the only one putting in effort. Realizing their mistake, his friends apologize and promise to be more 
                    considerate, reassuring him that they’ll work through it together.
                    </p>
                    <h3>Did you know?</h3>
                    <ul className="fact-list">
                        <li> Sharing feelings helps prevent emotional bottling, which can lead to anxiety or depression. 
                            It fosters a sense of relief and emotional well-being. </li>
                        <li>Opening up helps Thomas feel less isolated, as he realizes he’s not alone in his experiences 
                            and that his friends care. By vocalizing his frustrations, Thomas gains better insight into 
                            his own emotional triggers, which can help him manage stress more effectively in the future.
                        </li>
                        <li>Simply talking about our problems and sharing our negative emotions with someone we trust 
                            is a greta way to reduce stress. In doing so it also strenghtens our immune systems!</li>
                    </ul>
                    <div className="button-container">
                        <Button label="Next" className="button" onClick={() => navigate("/Thomas/Scenario5")} />
                    </div>
                </div>
            </div>
        </div>
    );
};