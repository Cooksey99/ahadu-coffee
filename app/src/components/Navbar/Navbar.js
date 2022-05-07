import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {


    return (
        <>
            <header>
                <div class="container">
                    <img class="logo" src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/logo.png" alt="logo" />
                    <nav class="links">
                        <Link to={''}>Home</Link>
                        <Link to={''}>Menu</Link>
                        <Link to={''}>Our Location</Link>
                        <Link to={''}>Contact Us</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
