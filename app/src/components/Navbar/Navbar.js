import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            {/* <div> */}
                <section id='navbar'>
                    <nav className="links">
                        <img className="logo" src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/logo.png"
                            onClick={() => navigate('/')} alt="logo" />
                        <Link to={'/'}><h2>Home</h2></Link>
                        <Link to={'/menu'}><h2>Menu</h2></Link>
                        <Link to={'/location'}><h2>Our Location</h2></Link>
                        <Link to={'/about-us'}><h2>About Us</h2></Link>
                        <div className='logo'/>
                    </nav>
                </section>

            {/* </div> */}
        </>
    )
}
