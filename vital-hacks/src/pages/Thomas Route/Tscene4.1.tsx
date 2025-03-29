import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene2.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Tscene41Component = () => {
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
                    Thomas took a break and he feels much better after 
                    getting some food in his system. He's back in the room and still trying with the wiring, 
                    his group mates are now extremely distracting. Thomas is extremely annoyed and 
                    he accidentally snapps the wire and starts crying. His friends realize somethings up 
                    and asks him what's wrong.  


</p>
                    <div className = "choices">
                        <Button label="Thomas should communicate his frustration with his friends" rounded/>
                        <Button label=" Thomas should remove himself from this environment to take a breather and push through for the rest of the club" rounded/>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

