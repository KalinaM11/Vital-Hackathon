import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './Tscene1.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Tscene5Component = () => {
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
                    <Card title="Scenario 5" className = "scenecard">
                    <p className="scenario-text">
                    The science fair project is all done! It’s dinner time and tonight's menu is roasted vegetables and 
                    grilled chicken with rice. Thomas very much dislikes his vegetables and he's been avoiding the veggies 
                    this whole week. He’s feeling bloated and his stomach hurts. He hasn't pooped in dayzzzz. </p>
                    <div className = "choices">
                        <Button label="Thomas avoids the vegetables once again however he opts for some pears and raspberries after dinner instead. " rounded/>
                        <Button label="Thomas toughens up and eats his vegetables. " rounded/>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

