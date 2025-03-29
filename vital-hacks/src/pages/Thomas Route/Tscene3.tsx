import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene1.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Tscene3Component = () => {
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
                <div className = 'scenario'>  
                    <Card title="Scenario 3" className = "scenecard">
                    <p className="scenario-text">
                    Thomas is worried about not finishing his science fair project on time, so he skips lunch to work on. 
                    He also was late for school and didn’t have time to eat breakfast. Afterschool, Thomas and his friends 
                    are at science club working on their project, except Thomas is the only one working and his friends are goofing off.  
                    Thomas is feeling irritated and can’t figure out the wiring of their robot.</p>
                    <div className = "choices">
                        <Button label="Thomas should take a break and grab a snack from the vending machine" rounded onClick={() => navigate("/Scenario3Result1")}/>
                        <Button label="Thomas should communicate to his groupmate about carrying their weight on this project" rounded onClick={() => navigate("/Scenario3Result2")}/>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

