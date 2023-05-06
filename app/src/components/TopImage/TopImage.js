import { useEffect, useRef } from 'react';
import './TopImage.css'

export default function TopImage() {


    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('in view');
                    ref.current.classList.add('opacity-100', 'animate-fadeIn');
                    ref.current.classList.remove('opacity-0', 'animate-fadeOut');
                } else {
                    ref.current.classList.remove('opacity-100', 'animate-fadeIn');
                    ref.current.classList.add('opacity-0', 'animate-fadeOut');
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.8,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);

        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return (
        <>
            <section id='top-image'>
                <div className="back"><img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/cups-glasses.jpg" />
                    <main className="intro">
                        <div className='intro-background animate-fadeIn' ref={ref}>
                            <h1>The flavors of the world...<br />right aroung the corner</h1>
                            <p>Ahadu is a new coffee shop in Lee's Summit offering intriguing blends of both coffee and people.</p>
                            {/* <button>Learn More</button> */}
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}
