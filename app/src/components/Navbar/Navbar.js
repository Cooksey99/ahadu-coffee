import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const history = useNavigate();

    return (
        <>
            {/* <div> */}
                <section id='navbar'>
                    <nav className="links">
                        <img className="logo" src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/logo.png"
                            onClick={() => history.push('/')} alt="logo" />
                        <Link to={'/'}><h2>Home</h2></Link>
                        <Link to={'/menu'}><h2>Menu</h2></Link>
                        <Link to={''}><h2>Our Location</h2></Link>
                        <Link to={''}><h2>Contact Us</h2></Link>
                        <div className='logo'/>
                    </nav>
                </section>

            {/* </div> */}
        </>
    )
}
