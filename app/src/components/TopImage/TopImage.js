import { useEffect, useRef } from 'react';

export default function TopImage() {


    const ref = useRef(null);


    useEffect(() => {

        console.log('in effect');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('in view');
                    ref.current.classList.add('opacity-100', 'animate-fadeIn');
                    ref.current.classList.remove('opacity-0', 'animate-fadeOut');
                } else {
                    ref.current.classList.remove('opacity-100', 'animate-fadeIn');
                    ref.current.classList.add('opacity-0', 'animate-fadeOut');
                    console.log('out of view');
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

            <section className="w-full relative text-center"><img className='w-full h-auto' src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/cups-glasses.jpg" />
                <main className="intro flex justify-center w-full bg-inherit">
                    <div className='top-1/2 -translate-y-1/3 animate-fadeIn flex flex-col justify-center items-center p-8 h-96 frosted-glass rounded-md absolute' ref={ref}>
                        <h1 className='text-4xl font-black'>The flavors of the world...<br />right around the corner</h1>
                        <p className='text-xl'>Ahadu is a new coffee shop in Lee's Summit offering intriguing blends of both coffee and people.</p>
                        <div className='w-full flex justify-center'>

                            <button className="unset flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium w-36 text-center
                    text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
                                <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 rounded-md group-hover:bg-opacity-0">
                                    Order
                                </span>
                            </button>
                            <button className="unset flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium w-36 text-center
                    text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
                                <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 rounded-md group-hover:bg-opacity-0">
                                    Shop
                                </span>
                            </button>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}
