import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene2.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Tscene2Component = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Header pageType=''/>
            <div className= 'body'>
                <div>
                    <img src={boyImage} alt = "boyImage" 
                    style= {{ height: '50vh', marginRight: '10px', padding: '10px', paddingLeft: '200px'}}/>
                </div>
                <div className = 'statusbar'>
                    <p>This is where the status bar goes</p>
                </div>

                <div className = 'scenario'>  
                    <Card title="Scenario 1" className = "scenecard">
                    <p className="scenario-text">
                    After talking to his dad, his parents helped him with his algebra homework and helped him study over the weekend. Thomas is feeling confident for his quiz! Over the weekend, he also got a new game for his nintendo switch. 
</p>
                    <div className = "choices">
                        <Button label="Thomas should stay up and play his game a little longer" rounded/>
                        <Button label=" Thomas should put away the switch and go to sleep" rounded/>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

