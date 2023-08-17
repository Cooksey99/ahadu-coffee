import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useRef } from 'react';

export default function Navbar() {

    const ref = useRef();
    const navigate = useNavigate();

    const floatNav = () => {
        ref?.current?.classList?.add('rounded-full', 'm-2', 'bg-slate-100')
        ref?.current?.classList?.remove('frosted-glass')

    }
    const blockNav = () => {
        ref?.current?.classList?.remove('rounded-full', 'm-2', 'bg-slate-100')
        ref?.current?.classList?.add('frosted-glass')
    }

    useEffect = () => {

        let throttleTimer = null;

        window.addEventListener('scroll', function () {

            if (throttleTimer === null) {

                throttleTimer = setTimeout(function () {
                    const pos = window.scrollY;

                    if (pos > 250) {
                        floatNav();
                    } else {
                        blockNav();
                    }
                    throttleTimer = null;
                }, 100);
            }
        });
    }, [];

    

    return (
        <>
            {/* <div> */}
            <section className='fixed flex justify-center align-center h-24 w-full z-50'>
                <nav className="links frosted-glass z-50 px-8 py-2 shadow duration-700" ref={ref}>
                    <img className="logo" src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/logo.png"
                        onClick={() => navigate('/')} alt="logo" />
                    <Link to='/menu' onClick={() => wtf()}><h2>Menu</h2></Link>
                    <Link to='/location' onClick={() => wtf()}><h2>Our Location</h2></Link>
                    <Link to='/about-us' onClick={() => wtf()}><h2>About Us</h2></Link>
                    <div className='logo' />
                </nav>
            </section>

            {/* </div> */}
        </>
    )
}
