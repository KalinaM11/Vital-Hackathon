import { Header } from '../shared/header/header.component'
import './homePage.component.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import boyImage from '../../images/boyHomePage.png';
import girlImage from '../../images/girlHomePage.png'
import { Card } from 'primereact/card';
// import { StatusBarComponent } from '../shared/statusBar/statusBar.component';

export const HomePageComponent = () => {
    const navigate = useNavigate();

    return (
        <div>
             <Header pageType= 'Home Page'/>
             <div className='box-container'>
                <div>
                    <img src={boyImage} alt="boyImage" style={{ height: '60vh', marginRight: '10px', padding: '10px', paddingLeft: '200px'}} />
                    <img src={girlImage} alt="girlImage" style={{ height: '60vh', marginRight: '10px', padding: '10px'}} />
                    </div> 
                <div style={{paddingRight: '30px'}}>
                    <Card title="Welcome!" style={{background: '#ADD8E6'}}>
                      <p className="card-text">
                            In this game you will be making choices to help guide a fellow middle schooler’s life. 
                            Throughout the day they experience the mind bending twists and turns that a young adult 
                            experiences on a daily basis. Dealing with school life, friendships, family dynamics, personal health, 
                            and other aspects can be a lot and our middle schoolers need your help! Will you choose the safe healthy 
                            path, or send your character down a dramatic spiral? Remember these characters are experiencing the same 
                            things you do every day. Click play to learn about the lives of Thomas and Eleanor.
                        </p>
                        <div className="button-container">
                            <Button label="start" className="button" onClick={() => navigate('/SelectionPage')}/>
                        </div>
                    </Card>
                </div> 
             </div>
        </div>
    );
};