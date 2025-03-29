import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene2.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Tscene42Component = () => {
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
                    <Card title="Scenario 4" className = "scenecard">
                    <p className="scenario-text">
                    Thomas talked to his friends, and now they are working together on the wiring issue. However, Thomas starts having bad headaches and feels dizzy. His friends are discussing things and he can’t seem to focus. His hands are also shaky. 

</p>
                    <div className = "choices">
                        <Button label="Thomas should take a break to drink water and eat some of his packed lunchs" rounded onClick={() => navigate("/Scenario4.2Result1")}/>
                        <Button label="Thomas should push through, since the science club ends in 20 minutes" rounded onClick={() => navigate("/Scenario4.2Result2")}/>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

