import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import girlImage from '../../images/girlHomePage-removebg-preview.png';
import { Card } from 'primereact/card';
import './SelectionPage.css';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const SelectionPageComponent = () => {
    const navigate = useNavigate(); 

    return (
        <div>
            <Header pageType="Select a Character!" />
            <div className="characterCard">
                {/* Thomas Moon Flip Card */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        {/* Front */}
                        <div className="flip-card-front">
                            <Card
                                title="Thomas Moon"
                                style={{
                                    margin: 0,
                                    padding: '1rem',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#ADD8E6'
                                }}
                            >
                                <div className="imageContainer">
                                    <img
                                        src={boyImage}
                                        alt="boyImage"
                                        className="characterImage"
                                    />
                                </div>
                            </Card>
                        </div>
                        {/* Back */}
                        <div className="flip-card-back">
                            <Card
                                title="Thomas Moon"
                                style={{
                                    margin: 0,
                                    padding: '1rem',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#ADD8E6'
                                }}
                            >
                                <div className="imageContainer">
                                    <p>
                                        Thomas is a 13 year old boy that goes to Hudson River Middle School (I.S. 289). 
                                        He is introverted, his favorite subject is science and in the future he wants to 
                                        be a biochemical engineer. After school, he participates in the science club and academic 
                                        decathlon team. He lives with his mom, dad, little sister Emma who is 7 years old and little
                                         brother Johnny who is 7 years old. In his free time he like to bake/cook and play video games. 
                                         He hates brussel sprouts, broccoli and people who don’t cover their mouth when they cough.

                                        

                                    </p>
                                   
                                    
                                </div>
                                <p> Click below to follow Thomas through his daily life activities for a few days!</p>
                                <Button onClick = {() => navigate("/Thomas/Scenario1")}> Play as Thomas</Button>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Elanor Bludworth Flip Card */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        {/* Front */}
                        <div className="flip-card-front">
                            <Card
                                title="Eleanor Bludworth"
                                style={{
                                    margin: 0,
                                    padding: '1rem',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#ADD8E6'
                                }}
                            >
                                <div className="imageContainer">
                                    <img
                                        src={girlImage}
                                        alt="girlImage"
                                        className="characterImage"
                                    />
                                </div>
                            </Card>
                        </div>
                        {/* Back */}
                        <div className="flip-card-back">
                            <Card
                                title="Eleanor Bludworth"
                                style={{
                                    margin: 0,
                                    padding: '1rem',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#ADD8E6'
                                }}
                            >
                                <div className="imageContainer">
                                <p>
                                Eleanor is a 13 year old girl who goes to Russel Sage Middle School (J.H.S 190). 
                                She is extroverted, swims for her school, and plays soccer for an outside club. Her 
                                favorite subjects and English and art. In the future, she wants to be a professional 
                                soccer player. Her parents are divorced and she lives with her Dad. Her mom recently 
                                got remarried and now Eleanor has a new stepsister, Stephanie who is 18 years old and 
                                going to college soon, they are not yet close but are looking to spend more time together. 
                                Eleanor is a nail-biter, she likes making tik-toks and she hates drinking water because it 
                                has no flavor. 
                                    </p>
                                   
                                    
                                </div>
                                <p> Click below to follow Eleanor through his daily life activities for a few days!</p>
                                <Button> Play as Eleanor</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
