import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function OurMenu() {

    const navigate = useNavigate()
    const ref = useRef([]);

    const tabs = [
        {
            h1: 'Specialty Drinks',
            p: 'Try our "Ahadu Special" or any of our other delicious custom drinks. They\'ll become your new favorite!',
            img: 'https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/latte-art.jpg',
            alt: 'latte art'
        },
        {
            h1: 'Treats',
            p: 'If you\'re on the go, grab a bagel! Or stay to savor some of our homemade sweet cakes or muffins.',
            img: 'https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/pastery-food.jpg',
            alt: 'pastery food'
        },
        {
            h1: 'Espresso',
            p: 'Uncover the rich depth of our fine Italian espresso, made to order by baristas who know their stuff!',
            img: 'https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/espresso-shot.jpeg',
            alt: 'espresso shot'
        }
    ];

    const addToRef = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    return (
        <>
            <section className="w-full flex flex-col justify-center align-middle bg-slate-100 py-6">
                <div className='text-center w-3/4 flex flex-col justify-center align-middle m-auto'>
                    <h1 className='font-bold text-4xl text-center'>Our Menu</h1>
                    <p className='py-2'>Stop by and experience our quality Ethiopian, Brazilian, and Italian roasts. We offer gluten-free, dairy-free, and vegan foods on our menu to satisfy any special dietary flneeds.</p>
                </div>
                <div className="flex justify-evenly gap-3 py-8">

                    {tabs.map((tab, i) => (
                        <div key={i} className="max-w-sm w-64 bg-white border border-gray-200 rounded-lg shadow flex flex-col align-middle" ref={addToRef}>
                            <img className="rounded-t-lg" src={tab.img} alt={tab.alt} />
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{tab.h1}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">{tab.p}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex justify-center'>
                    <button onClick={() => navigate('/menu')} className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium w-36 text-center
                    text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
                        <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 rounded-md group-hover:bg-opacity-0">
                            View Full Menu
                        </span>
                    </button>

                </div>
            </section>
        </>
    )
}
