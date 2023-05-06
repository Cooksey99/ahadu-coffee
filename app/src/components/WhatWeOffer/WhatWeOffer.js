export default function WhatWeOffer() {

    const checkMark = () => {
        return (
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        )
    }

    return (
        <>
            <section className="bg-slate-100 w-full relative h-96 flex justify-end">
                <div className="w-3/4">
                    <h1 className='text-center pt-8 pb-4 text-xl'>What We Offer</h1>
                    <div className='px-4 pt-4'>
                        <div className='flex justify-center text-left gap-6'>
                            <ul className='w-1/3'>
                                <li className="flex items-start font-size: 38px">{checkMark()}Fast and Free Wifi</li><br/>
                                <li className="flex items-start">{checkMark()}Come work or surf at Ahadu, with super fast 5G WiFi.</li>
                            </ul>
                            <ul className='w-1/3'>
                                <li className="flex items-start">{checkMark()}Convenient Location</li><br/>
                            </ul>
                            <ul className='w-1/3'>
                                <li className="flex items-start">{checkMark()}Free Parking</li><br/>
                                <li className="flex items-start">{checkMark()}There's always plenty of parking available for our cozy shop. We're also working on a drive-thru window...coming soon!</li>
                            </ul>
                            <img className='absolute h-3/4 v-center left-10 rounded-md shadow' src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/coffee-cup.png" alt="coffee" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
