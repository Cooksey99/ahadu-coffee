import { useNavigate } from 'react-router-dom';
import './OurMenu.css';

export default function OurMenu() {

    const history = useNavigate()

    return (
        <>
            <section className="our-menu">
                <div className='menu-header'>
                    <h1>Our Menu</h1>
                    <p>Stop by and experience our quality Ethiopian, Brazilian, and Italian roasts. We offer gluten-free, dairy-free, and vegan foods on our menu to satisfy any special dietary flneeds.</p>
                </div>
                <div className="menu-sections">
                    <ul className="specialty">
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/latte-art.jpg" alt="latte" />
                            <h3>Specialty drinks</h3>
                            <p>Try our "Ahadu Special" or any of our other delicious custom drinks. They'll become your new favorite!</p>
                    </ul>
                    <ul>
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/pastery-food.jpg" alt="treats" />
                            <h3>Treats</h3>
                            <p>If you're on the go, grab a bagel! Or stay to savor some of our homemade sweet cakes or muffins.</p>
                    </ul>
                    <ul>
                        <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/espresso-shot.jpeg" alt="espresso" />
                            <h3>Espresso</h3>
                            <p>Uncover the rich depth of our fine Italian espresso, made to order by baristas who know their stuff!</p>
                    </ul>
                </div>
                <button onClick={() => history.push('/menu')}>View Full Menu</button>
            </section>
        </>
    )
}
