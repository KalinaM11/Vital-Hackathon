import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene1.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Button } from 'primereact/button';

export const Tscene1Component = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Header pageType=''/>
            <div className= 'body'>
                <div>
                    <img src={boyImage} alt = "boyImage" 
                    style= {{ height: '60vh', marginRight: '10px', padding: '10px', paddingLeft: '200px'}}/>
                </div>
                <div className = 'statusbar'>
                    <p>This is where the status bar goes</p>
                </div>
                <div className = 'preface'>  
                    <h3> Setting the Scene</h3>
                    <p className="preface-text">
                    Thomas has an upcoming science fair, but his team is slacking on work. Their fair is in a week,
                     and they still have much to do. He also has an algebra quiz coming up around the same time, and 
                     he’s struggling with the material. Thomas is feeling overwhelmed and frustrated. He's been isolating himself 
                     and not spending time with his younger twin siblings Emma and Johnny.  </p>
                </div>

                <div className = 'scenario'> 
                    <h3>Scenario 1</h3> 
                    <p className="scenario-text">
                    The kids are back from school and their activities, and Emma and Johnny are asking Thomas to go ride their bikes
                    with them around the park with Dad.</p>
                    <div className = "choices">
                        <Button label="Thomas should go play with his siblings until dinner" rounded onClick={() => navigate('/Scenario1Result1')}/>
                        <Button label="Thomas should stay in his room" rounded onClick={() => navigate('/Scenario1Result2')}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

