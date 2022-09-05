import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const history = useHistory();

    return (
        <>
            <section id='navbar'>
                <nav className="links">
                    <img className="logo" src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/logo.png"
                        onClick={() => history.push('/')} alt="logo" />
                    <Link to={'/'}>Home</Link>
                    <Link to={'/menu'}>Menu</Link>
                    <Link to={''}>Our Location</Link>
                    <Link to={''}>Contact Us</Link>
                </nav>
            </section>
        </>
    )
}
