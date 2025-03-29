import { Header } from '../shared/header/header.component';
import boyImage from '../../images/boyHomePage.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './Tresult1-1.css'; // Re-enable CSS import

export const TResult5_1Component = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header pageType="Find Alternatives" />
            <div className="result-page">
                <div className="results1_1-container">
                    <img src={boyImage} alt="boyImage" className="result-image" />
                    <div>
                        <Message severity="success" text="Happiness +10%" /> <br></br>
                        <Message severity="success" text="Energy +5%" /> <br></br>
                        <Message severity="success" text="Food +10%" /> <br></br>
                    </div>
                </div>
                <div className='results1_1-content'>
                    <p>
                    Thomas pushes the roasted vegetables around his plate, once again avoiding them as he focuses on the 
                    grilled chicken and rice. Though he skips the veggies, he decides to have some pears and raspberries 
                    after dinner, hoping to ease his stomach discomfort. As he finishes the sweet, juicy fruit, he wonders 
                    if it might finally help get things moving.
                    </p>
                    <h3>Did you know?</h3>
                    <ul className="fact-list">
                        <li>Lack of fiber from vegetables can lead to constipation, bloating, and irregular bowel movements. 
                            Including fiber-rich foods like vegetables aids in digestion and promotes a healthy gut microbiome.</li>
                        <li>Vegetables provide essential vitamins and antioxidants that support immune function, and avoiding 
                            them may increase the risk of illness!!</li>
                        <li>The lack of essential nutrients from vegetables can lead to fatigue and reduced cognitive function. 
                            As well as higher risks of heart disease, diabetes, and certain cancers.</li>
                        <li>Balanced meals help regulate appetite and prevent overeating by providing essential nutrients and fiber.
                            Nutrients from a variety of food groups support brain health, reducing stress and brain fog. </li>
                    </ul>
                    <div className="button-container">
                        <Button label="Next" className="button" onClick={() => navigate('/Thomas/Final')} />
                    </div>
                </div>
            </div>
        </div>
    );
};