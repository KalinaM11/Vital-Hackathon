import {Header} from '../shared/header/header.component';
import { useNavigate } from 'react-router-dom';
import './TFinal.css';
import boyImage from '../../images/boyHomePage-removebg-preview.png';
import { Button } from 'primereact/button';


export const TfinalComponent = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Header pageType=''/>
            <div className= 'b'>
                <div className='image'>
                    <img src={boyImage} alt = "boyImage" style= {{ height: '60vh'}}/>
                    <Button label="Go back to Home" rounded onClick={() => navigate('/')}/>
                </div>
                <div className = 'conclusion'>  
                    <h3 style={{padding: 0, margin:0}}>Thanks for playing!</h3>
                    <p>
                    It’s science fair day!! Thomas and his team had an amazing project and won first place! Though
                     he has had a tough week, these decisions has helped him make healthier choices for both his physical
                      and mental well-being. </p>
                    <h3 style={{padding: 0, margin:0}}>Key points from Thomas' Story:</h3>
                    <ul>
                        <li>Going outside and getting physical exercise
                            <ul>
                                <li>Going outdoors lowers stress and boosts vitamin D, a key nutrient for immune function.
                                    Exercise improves circulation and metabolic health, reducing the risk of obesity and type 2 diabetes
                                </li>
                            </ul>
                        </li>
               
                        <li>Sleep Importance
                            <ul>
                                <li>Quality sleep supports bodily repair, hormone regulation, and stress management, reducing the risk of heart disease, diabetes, and depression.
                                    It also strengthens the immune system by promoting cytokine production, which helps fight infections.
                                </li>
                            </ul>
                        </li>

                        <li>Making sure to eat throughout the day
                            <ul>
                                <li>Eating regular, balanced meals prevents energy crashes, supports metabolism, and reduces long-term health risks.
                                     A steady nutrient supply keeps blood sugar stable and strengthens the immune system.
                                </li>
                            </ul>
                        </li>
                        <li>Talking about your emotions
                            <ul>
                                <li>Managing stress through conversation reduces the risk of hypertension, depression, and heart disease.
                                    Lowering stress levels also helps regulate cortisol, keeping your immune system strong and resilient.
                                </li>
                            </ul>
                        </li>
                        <li>Eating balanced meals
                            <ul>
                                <li>A nutrient-rich diet supports a healthy weight and lowers the risk of heart disease, diabetes, and cancer.
                                    Balanced meals also strengthen gut health and immune function, helping the body fight illness.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 
